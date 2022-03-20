import { LocalPersistanceService } from "../local-persistance-service";

/**
 * @returns {Promise<Lesson[]>}
 */
export const getAll = () => {
  return LocalPersistanceService.getData("lessons")
}

/**
 * @typedef {object} Lesson
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} markdownDescription
 * @property {string} coverUrl
 * @property {number} minutes
 * @property {string} moduleId
 */
