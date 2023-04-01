import { RcsbFv, RcsbFvTrackDataElementInterface, RcsbFvRowConfigInterface } from '@rcsb/rcsb-saguaro';
import { PluginUIContext } from 'molstar/lib/mol-plugin-ui/context';
import { PredictionData } from '../custom-types';
/**
 * Method which initializes the Rcsb viewer and adds the tracks to it.
 * @param data Prediction data
 * @param molstarPlugin Mol* plugin
 * @returns The rendered Rcsb plugin.
 */
export declare function initRcsb(data: PredictionData, molstarPlugin: PluginUIContext): RcsbFv;
/**
 * Method to calculate the width of the viewer.
 * @returns The width
 */
declare function calculateViewerWidth(): number;
/**
 * Method called when any element is clicked in the viewer.
 * @param predictionData Prediction data
 * @param molstarPlugin Mol* plugin
 * @param trackData Data of the clicked track
 * @param event Mouse event
 * @returns void
 */
declare function elementClicked(predictionData: PredictionData, molstarPlugin: PluginUIContext, trackData?: RcsbFvTrackDataElementInterface, event?: MouseEvent): void;
/**
 * Method called when any element is highlighted in the viewer.
 * @param data Prediction data
 * @param molstarPlugin Mol* plugin
 * @param trackData Data of the clicked track
 * @param event Mouse event
 * @returns void
 */
declare function onHighlight(data: PredictionData, molstarPlugin: PluginUIContext, trackData: Array<RcsbFvTrackDataElementInterface>): void;
/**
 * Method which creates all of the tracks for the Rcsb viewer.
 * @param data Prediction data
 * @returns Configuration for the viewer
 */
declare function createRowConfigDataRcsb(data: PredictionData): RcsbFvRowConfigInterface<{}, {}, {}, {}>[];
