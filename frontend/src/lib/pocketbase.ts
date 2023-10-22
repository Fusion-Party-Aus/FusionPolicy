import moment from 'moment';
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

//export const pb = new PocketBase('https://policy-admin.fusionparty.org.au')
export const pb = new PocketBase('http://127.0.0.1:8090')

export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange( (auth) => {
    currentUser.set(pb.authStore.model)
})

interface QueryOptions {
    dateFields?: string[]
}

export const getFullList = async (model: string, options: QueryOptions = {} ) => {
    const data = await pb.collection(model).getFullList()
    return data.map((obj: any) => {
        const object = {
            ...obj,
            created: moment(obj.created),
            updated: moment(obj.updated),
        }
        options.dateFields && options.dateFields.forEach((field: string) => {
            object[field] = moment(object[field])
        })
        return object;
    });
}