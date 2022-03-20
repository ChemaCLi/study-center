import { ROLES } from "../../permissions";
import { LocalPersistanceService } from "../local-persistance-service";

export const getAll = async () => {
  const users = await LocalPersistanceService.getData("users")
  return users.filter(u => u.role === ROLES.INSTRUCTOR)
};
