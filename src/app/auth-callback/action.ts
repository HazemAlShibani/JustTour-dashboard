"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function checkIsAdmin() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || !user?.email) {
        throw new Error('Invalid user data')
      }

    const isAdmin = user?.email == process.env.ADMIN_EMAIL;

    return { isAdmin: isAdmin };
}