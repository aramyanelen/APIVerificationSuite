import {z} from "zod";

export const StatusEnum = z.enum(['OK', 'ERROR']);

export const ChangeLogSchema = z.object({
    status: StatusEnum,
    data: z.string()
});