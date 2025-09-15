class ProjectEntry {
    constructor(title, description,imageUrl, url = undefined, techList) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.url = url;
        this.techList = techList;
    }

    isPublic() {
        return this.url && this.url.trim() !== ''
    }

    getVisibility(){
        return this.isPublic() ? 'public' : 'private'
    }

}

export default ProjectEntry