import { Pipeline } from "markdown-pipeline";
/** Source configuration data */
interface ConfigSource {
    module: string;
    misc_path: string;
    template: string;
    out: string;
    json_out: string;
    debug_out: string;
    base_url: string;
}
/** Process given source and add documentation pages to the pipeline */
export declare function generateDocs(pipeline: Pipeline, config: ConfigSource): void;
export {};
