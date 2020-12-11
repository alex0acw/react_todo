import { AutoComplete, Tag } from "antd";
import { useEffect, useRef, useState } from "react";
import { TwitterPicker } from 'react-color';
import { CloseOutlined } from '@ant-design/icons';

export function TagCreator({ onCreateTag, tagOptions, onClose, ...props }) {
    const [color, setColor] = useState("Blue");
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    });
    return (
        <Tag
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
            <AutoComplete
                ref={inputRef}
                bordered={false}
                options={tagOptions}
                style={{ minWidth: "100px", border: 0, flexGrow: 1, fontSize: "inherit" }}
                onSelect={(data) => {
                    onCreateTag({ content: data, color: color });
                }}
                filterOption={(input, option) => (option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0)}
                placeholder="input here"
                onInputKeyDown={(keyEvent) => {
                    if (keyEvent.key === "Enter") {
                        onCreateTag({ content: keyEvent.target.value, color: color });
                        // setInputVisible(false);
                    }
                }}

            />
            <CloseOutlined onClick={() => onClose?.()} style={{ backgroundColor: "transparent", width: "2vw", flexGrow: 0 }} />
        </Tag>
    )
}