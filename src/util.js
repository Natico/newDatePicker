export function classNames(list, prefix, profix) {
    let classStr = '';
    classStr = list.length > 0 ? list.filter(item => !!item).join(' ') : '';
    return classStr
};

export function classNames2() {
    return
}