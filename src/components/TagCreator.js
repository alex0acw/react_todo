import { AutoComplete, Tag } from "antd";
import { useEffect, useRef } from "react";

export function TagCreator({ onCreateTag, tagOptions, ...props }) {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    });
    return (
        <Tag
            style={{ display: "flex" }}
            {...props}
        >
            <span style={{ width: "20px", backgroundColor: "green", flex: "0 0 20px" }}></span>
            <AutoComplete
                ref={inputRef}
                bordered={false}
                options={tagOptions}
                style={{ width: 200, flexGrow: 1, border: 0 }}
                onSelect={(data) => {
                    onCreateTag({ content: data, color: "Green" });
                }}
                filterOption={(input, option) => (option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0)}
                placeholder="input here"
                onInputKeyDown={(keyEvent) => {
                    if (keyEvent.key === "Enter") {
                        onCreateTag({ content: keyEvent.target.value, color: "Green" });
                        // setInputVisible(false);
                    }
                }}

            />
        </Tag>
    )
}