/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the card group
 *         $REST.Components.CardGroup({
 *             el: document.querySelector("#demo"),
 *             cards: [
 *                 {
 *                     body: [
 *                         {
 *                             title: "Card 1",
 *                             text: "This is the first card."
 *                         }
 *                     ]
 *                 },
 *                 {
 *                     body: [
 *                         {
 *                             title: "Card 2",
 *                             text: "This is the second card."
 *                         }
 *                     ]
 *                 },
 *                 {
 *                     body: [
 *                         {
 *                             title: "Card 3",
 *                             text: "This is the third card."
 *                         }
 *                     ]
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Card Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the cardGroup
 * let el = document.querySelector("#cardGroup");
 * let cardGroup = Components.CardGroup({
 *     el: el,
 *     cards: [
 *         {
 *             body: [
 *                 {
 *                     title: "Card 1",
 *                     text: "This is the first card."
 *                 }
 *             ]
 *         },
 *         {
 *             body: [
 *                 {
 *                     title: "Card 2",
 *                     text: "This is the second card."
 *                 }
 *             ]
 *         },
 *         {
 *             body: [
 *                 {
 *                     title: "Card 3",
 *                     text: "This is the third card."
 *                 }
 *             ]
 *         }
 *     ]
 * });
 * ```
 */
export const CardGroup: (props: ICardGroupProps) => ICardGroup;

import { ICardProps } from "./card";

/**
 * Card Group
 */
export interface ICardGroup {
    /** The element. */
    el: Element;

    /** Hides the card group. */
    hide: () => void;

    /** Shows the card group. */
    show: () => void;
}

/**
 * Card Group Properties
 */
export interface ICardGroupProps {
    cards?: Array<ICardProps>;
    className?: string;
    el?: Element | HTMLElement;
    isDeck?: boolean;
}