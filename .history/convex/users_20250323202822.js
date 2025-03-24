import { mutation } from "./_generated/server";

export const CreateUser = mutation({
    args: {
        name: v.string(),
        email: "string",
        credits: "number",
        subscriptionId: "string",
    },
})