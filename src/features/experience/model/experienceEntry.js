class ExperienceEntry {
    constructor(title, description, time, work = true, company = '') {
        this.title = title
        this.description = description
        this.time = time
        this.work = work
        this.company = company
    }
}
export default ExperienceEntry