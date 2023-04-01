import { PluginUIContext } from 'molstar/lib/mol-plugin-ui/context';
import { PredictionData, PolymerColorType, PolymerViewType, PocketsViewType, Point3D } from '../custom-types';
import { RcsbFv } from '@rcsb/rcsb-saguaro';
import { StateObjectSelector } from 'molstar/lib/mol-state';
import { Expression } from 'molstar/lib/mol-script/language/expression';
/**
 * Loads the structure to be predicted and adds the polymer representations to the viewer.
 * @param plugin Mol* plugin
 * @param structureUrl URL of the structure to be predicted
 * @returns An array containing the model and structure.
 */
export declare function loadStructureIntoMolstar(plugin: PluginUIContext, structureUrl: string): any;
/**
 * Method used to show only the currently selected representation.
 * @param value Currently shown type of polymer representation
 * @param plugin Mol* plugin
 * @param showConfidentResidues Whether to show only the confident residues
 * @returns void
 */
export declare function updatePolymerView(value: PolymerViewType, plugin: PluginUIContext, showConfidentResidues: boolean): void;
/**
 * Method used to overpaint the currently selected polymer representation.
 * @param value Currently shown type of polymer representation
 * @param plugin Mol* plugin
 * @param prediction Prediction data
 * @returns void
 */
export declare function overPaintPolymer(value: PolymerColorType, plugin: PluginUIContext, prediction: PredictionData): Promise<void>;
/**
 * Method to create the pocket holder group (called "Pockets" in the tree)
 * @param plugin Mol* plugin
 * @param structure Mol* structure (returned from the first call of loadStructureIntoMolstar())
 * @param groupName Group name (in this case "Pockets")
 * @param prediction Prediction data
 */
export declare function createPocketsGroupFromJson(plugin: PluginUIContext, structure: StateObjectSelector, groupName: string, prediction: PredictionData): Promise<void>;
/**
 * Method which sets the visibility of one pocket in the desired representation
 * @param plugin Mol* plugin
 * @param representationType Type of the representation to be shown
 * @param pocketIndex Index of the pocket
 * @param isVisible Visibility of the pocket
 * @returns void
 */
export declare function showPocketInCurrentRepresentation(plugin: PluginUIContext, representationType: PocketsViewType, pocketIndex: number, isVisible: boolean): void;
/**
 * Method which sets the visibility of all the pockets in the desired representation
 * @param plugin Mol* plugin
 * @param representationType Type of the representation to be shown
 * @returns void
 */
export declare function showAllPocketsInRepresentation(plugin: PluginUIContext, representationType: PocketsViewType): void;
/**
 * Method which focuses on the residues loci specidfied by the user, can be called from anywhere
 * @param plugin Mol* plugin
 * @param chain Chain (letter) to be focused on
 * @param ids
 * @returns void
 */
export declare function highlightInViewerLabelIdWithoutFocus(plugin: PluginUIContext, chain: string, ids: number[]): void;
/**
 * Highlights the selected surface atoms, if toggled, the method will focus on them as well
 * @param plugin Mol* plugin
 * @param ids Surface atoms ids
 * @param focus Focus on the surface atoms (if false, it will only highlight them)
 * @returns void
 */
export declare function highlightSurfaceAtomsInViewerLabelId(plugin: PluginUIContext, ids: string[], focus: boolean): void;
/**
 * Method which adds predicted structure representation to the viewer
 * @param plugin Mol* plugin
 * @param prediction Prediction data
 * @param structure Mol* structure (returned from the first call of loadStructureIntoMolstar())
 * @returns void
 */
export declare function addPredictedPolymerRepresentation(plugin: PluginUIContext, prediction: PredictionData, structure: StateObjectSelector): Promise<void>;
/**
 * Method which gets selection of the confident residues (plddt > 70) for predicted structures
 * @param prediction Prediction data
 * @returns Expression with the selection of the confident residues
 */
export declare function getConfidentResiduesFromPrediction(prediction: PredictionData): Expression;
/**
 * Method which focuses on the loci specified by the user
 * @param plugin Mol* plugin
 * @param chain Chain (letter) to be focused on
 * @param ids Residue ids
 * @returns void
 */
export declare function highlightInViewerAuthId(plugin: PluginUIContext, chain: string, ids: number[]): void;
/**
 * Method which returns coordinates of the surface atoms
 * @param plugin Mol* plugin
 * @param ids Surface atom ids
 * @returns An array of coordinates
 */
export declare function getPocketAtomCoordinates(plugin: PluginUIContext, ids: string[]): Point3D[];
/**
 * Method which connects Mol* viewer activity to the RCSB plugin
 * @param plugin Mol* plugin
 * @param predictionData Prediction data
 * @param rcsbPlugin Rcsb plugin
 * @returns void
 */
export declare function linkMolstarToRcsb(plugin: PluginUIContext, predictionData: PredictionData, rcsbPlugin: RcsbFv): void;
