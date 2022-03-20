import { LocalPersistanceService } from "../local-persistance-service";

/**
 * @returns {Promise<Module[]>}
 */
export const getAll = () => {
  return LocalPersistanceService.getData("modules")
}

/**
 * @typedef {object} Module
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} markdownDescription
 * @property {string} coverUrl
 * @property {string} courseId
 */
