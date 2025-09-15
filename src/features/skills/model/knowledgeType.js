import {MOBILE, WEB, DB_BE, MEDIA_PROC, LANGUAGE} from "@/features/skills/skills.constants";

class KnowledgeType {
    constructor(type) {
        this.type = type;
    }

    static MOBILE = new KnowledgeType(MOBILE);
    static WEB = new KnowledgeType(WEB);
    static DB_BACKEND = new KnowledgeType(DB_BE);
    static MD_PROCESS = new KnowledgeType(MEDIA_PROC);
    static LANGUAGE = new KnowledgeType(LANGUAGE);


    dividerStyle() {

        switch (this.type) {
            case MOBILE:
                return 'divider-mobile'
            case WEB:
                return 'divider-web'
            case DB_BE:
                return 'divider-db'
            case MEDIA_PROC:
                return 'divider-media'
            case LANGUAGE:
                return 'divider-languages'
        }
    }

    progressStyle() {
        switch (this.type) {
            case MOBILE:
                return 'progress-mobile';
            case WEB:
                return 'progress-web';
            case DB_BE:
                return 'progress-db';
            case MEDIA_PROC:
                return 'progress-media';
            case LANGUAGE:
                return 'progress-languages';
        }
    }

    label() {
        return this.type.toUpperCase()
    }

    value() {
        return this.type
    }

    static values() {
        return [this.MOBILE, this.WEB, this.DB_BACKEND, this.MD_PROCESS, this.LANGUAGE];
    }
}

export default KnowledgeType