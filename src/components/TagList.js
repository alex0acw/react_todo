import { AutoComplete, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import { addTodoTags } from "../api/todosApi";
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { TwitterPicker } from 'react-color';
import { TagCreator } from "./TagCreator";

export default function TagList({ tags: initTags, tagDefs: initTagDefs, onTagsChange, addTagDef: addTagDefRedux }) {
    const [tagDefs, setTagDefs] = useState(initTagDefs);
    const [tags, setTags] = useState(initTags);
    const [inputVisible, setInputVisible] = useState(false);

    useEffect(() => {
        setTagDefs(initTagDefs);
    }, [initTagDefs])
    useEffect(() => {
        setTags(initTags);
    }, [initTags])


    const addTag = ({ content, color }) => {
        if (tagDefs.filter(tagDef => tagDef.content === content).length === 0) {
            const newTagDef = { content, color: "red" };
            setTagDefs([...tagDefs, newTagDef])
            addTodoTags(newTagDef.content, newTagDef.color).then(() => {
                addTagDefRedux(newTagDef)
            })
        }
        if (!tags.includes(content)) {
            setTags([...tags, content])
            onTagsChange([...tags, content])
        }
    }

    return (
        <div className={"tag-group"}>
            {tags.map((tagContent) => (
                <Tooltip title={tagContent} key={tagContent}>
                    <Tag
                        style={{ backgroundColor: tagDefs.filter(tagDef => tagDef.content === tagContent)[0]?.color }}
                    >
                        <span style={{ backgroundColor: "transparent" }}>
                            {tagContent.length > 20 ? `${tagContent.slice(0, 20)}...` : tagContent}
                        </span>
                        <CloseOutlined onClick={() => onTagsChange?.(tags.filter(tag => tag !== tagContent))} style={{ backgroundColor: "transparent" }} />
                    </Tag>
                </Tooltip>

            ))}

            {inputVisible && (
                <TagCreator
                    onBlur={() => { setInputVisible(false); }}
                    onCreateTag={(tag) => { addTag(tag); setInputVisible(false); }} tagOptions={tagDefs.map(v => ({ value: v.content }))}
                />
            )}
            {!inputVisible && (
                <Tag className="site-tag-plus" onClick={() => { setInputVisible(true) }} style={{ border: "0" }}>
                    <PlusOutlined />
                </Tag>
            )}

        </div>
    )
} 