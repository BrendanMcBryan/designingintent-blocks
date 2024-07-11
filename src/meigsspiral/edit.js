import {
	TextControl,
	Flex,
	FlexBlock,
	FlexItem,
	Button,
	Icon,
	PanelBody,
	PanelRow,
	RangeControl,
	ColorPicker,
} from "@wordpress/components";
import {
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	var spiralUrl =
		designingintentblocksdata.pluginPath +
		"/designingintent-blocks/assets/images/Meighs-Spiral.webp";

	console.log(attributes);
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title="Width" initialOpen>
					<RangeControl
						label="Width"
						value={attributes.width}
						onChange={(value) => setAttributes({ width: value })}
						min={5}
						max={50}
					></RangeControl>
				</PanelBody>
				<PanelBody title="Opacity" initialOpen>
					<RangeControl
						label="Opacity"
						value={attributes.opacity}
						onChange={(value) => setAttributes({ opacity: value })}
						min={5}
						max={33}
					></RangeControl>
				</PanelBody>
				<PanelBody title="Position">
					<RangeControl
						label="Top"
						value={attributes.top}
						onChange={(value) => setAttributes({ top: value })}
						min={-50}
						max={60}
					></RangeControl>
					<RangeControl
						label="Left"
						value={attributes.left}
						onChange={(value) => setAttributes({ left: value })}
						min={-95}
						max={95}
					></RangeControl>
				</PanelBody>
			</InspectorControls>
			<div className="meigsSpiral__editor-frame">
				<img
					src={spiralUrl}
					className="meigsSpiral__editor-image"
					alt="meigsSpiral"
					style={{
						width: `${attributes.width}%`,
						opacity: `${attributes.opacity}%`,
						top: `${attributes.top}%`,
						left: `${attributes.left}%`,
					}}
				/>
			</div>
		</div>
	);
}
