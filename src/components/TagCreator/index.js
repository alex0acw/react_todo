import { AutoComplete, Tag } from "antd";
import { useEffect, useRef, useState } from "react";
import { TwitterPicker } from 'react-color';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import './style.css'

export function TagCreator({ onCreateTag, tagDefs, onClose, ...props }) {
    const [color, setColor] = useState("Blue");
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const [inputName, setInputName] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    });
    return (
        <Tag
            className="tag-creator"
            style={{ display: "flex" }}
            {...props}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ width: "2vw", flexGrow: 1, backgroundColor: color }}
                    onClick={() => { setColorPickerVisible(true) }}
                >
                </span>
                {
                    colorPickerVisible &&
                    <div style={{ height: 0, width: 0 }}>
                        <div style={{ position: "relative", top: "5px", }} >
                            <TwitterPicker onChange={(e) => {
                                setColor(e.hex)
                                setColorPickerVisible(false)
                            }} />
                        </div>
                    </div>
                }
            </div>
            <input ref={inputRef} type='text' placeholder="tag name..." list='tag-creator-input-options'
                onKeyDown={(keyEvent) => {
                    if (keyEvent.key === "Enter") {
                        onCreateTag({ content: keyEvent.target.value, color: color });
                    }
                    if (keyEvent.key === "Escape") {
                        onClose?.()
                    }
                }}
            />
            <datalist id='tag-creator-input-options'>
                {
                    tagDefs.map(({ content }) => (
                        <option value={content}>{content}</option>))
                }
            </datalist>
            <CheckOutlined onClick={() => onClose?.()} />
            <CloseOutlined onClick={() => onClose?.()} style={{ backgroundColor: "transparent", width: "2vw", flexGrow: 0 }} />
        </Tag>
    )
}