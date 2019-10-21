import React, { FunctionComponent } from 'react'
import { IconButton } from '@material-ui/core'

interface IEditorButtonProps {
    id?: string
    label: string
    style: string
    type: string
    active?: boolean
    icon: JSX.Element
    onClick?: any
    toolbarMode?: boolean
}

const EditorButton: FunctionComponent<IEditorButtonProps> = (props: IEditorButtonProps) => {
    const size = !props.toolbarMode ? "medium" : "small"
    const toolbarId = props.toolbarMode ? "-toolbar" : ""
    return (
        <IconButton
            id={props.id + toolbarId}
            onMouseDown={(e) => {
                e.preventDefault()
                if (props.onClick) {
                    props.onClick(props.style, props.type, props.toolbarMode)
                }
            }}
            aria-label={props.label}
            color={props.active ? "primary" : "default"}
            size={size}
        >
            {props.icon}
        </IconButton>
    )
}

export default EditorButton