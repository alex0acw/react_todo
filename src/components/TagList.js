import { Input, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';

export default function TagList({ tags: initTags = [], tagsDefs = [], onTagsChange }) {

    const [tags, setTags] = useState(initTags);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputVisible)
            inputRef.current.focus();
    }, [inputVisible]);

    const createTag = (content) => {
        onTagsChange([...tags, content])
        // setTags()
    }
    
    return (
        <div>

            {tags.map((tagContent) => (
                <Tooltip title={tagContent} key={tagContent}>
                    <Tag
                        closable="true"
                        onClose={() => onTagsChange?.(tags.filter(tag => tag !== tagContent))}
                        style={{ backgroundColor: tagsDefs.filter(tagDef => tagDef.content === tagContent)[0]?.color }}
                    >
                        <span>
                            {tagContent.length > 20 ? `${tagContent.slice(0, 20)}...` : tagContent}
                        </span>
                    </Tag>
                </Tooltip>

            ))}

            {inputVisible && (
                <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    className="tag-input"
                    value={inputValue}
                    onChange={({ target }) => setInputValue(target.value)}
                    onBlur={() => { createTag(inputValue); setInputVisible(false) }}
                // onPressEnter={}
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