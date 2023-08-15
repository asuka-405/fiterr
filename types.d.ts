export type FITERR_CONFIG = {
    dirs: string[];
    files: string[];
    onfile: function (filepath);
    ondir: function (dirpath);
}
