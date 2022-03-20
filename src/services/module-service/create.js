import * as uid from "uuid";
import { LocalPersistanceService } from "../local-persistance-service";

/**
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.description
 * @param {string} params.markdownDescription
 * @param {string} params.coverUrl
 * @param {string} params.courseId
 */
export const create = ({ ...newModuleData }) => {
  return LocalPersistanceService.saveData(
    "modules",
    { id: uid.v4(), ...newModuleData }
  )
}
