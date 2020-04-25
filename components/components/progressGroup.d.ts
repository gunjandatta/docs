/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the progressGroup
 *         $REST.Components.ProgressGroup({
 *             el: document.querySelector("#demo"),
 *             progressbars: [
 *                 {
 *                     size: 25,
 *                     isStriped: true,
 *                     label: "25%"
 *                 },
 *                 {
 *                     size: 50,
 *                     isAnimated: true,
 *                     isStriped: true,
 *                     label: "50%"
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Progress Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the progress group
 * let el = document.querySelector("#progressGroup");
 * let progressGroup = Components.ProgressGroup({
 *     el: el,
 *     progressbars: [
 *         {
 *             size: 25,
 *             isStriped: true,
 *             label: "25%"
 *         },
 *         {
 *             size: 50,
 *             isAnimated: true,
 *             isStriped: true,
 *             label: "50%"
 *         }
 *     ]
 * });
 * ```
 */
export const ProgressGroup: (props: IProgressGroupProps) => IProgressGroup;

import { IProgressProps } from "./progress";

/**
 * Progress Group
 */
export interface IProgressGroup {
    /** The element. */
    el: Element;

    /** Hides the progress group. */
    hide: () => void;

    /** Shows the progress group. */
    show: () => void;
}

/**
 * Progress Group Properties
 */
export interface IProgressGroupProps {
    className?: string;
    el?: Element | HTMLElement;
    isMultiple?: boolean;
    progressbars?: Array<IProgressProps>;
}