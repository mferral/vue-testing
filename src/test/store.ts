export const updateStore = async (store: any, obj: {}) => {
    store.$patch(obj)
};