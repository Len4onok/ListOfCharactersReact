
export const updateObjectInArray = (items, objPropName, itemId, newObjProp) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return { ...item, ...newObjProp }
        };
        return item;
    })
}
