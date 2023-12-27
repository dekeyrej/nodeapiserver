import Pool from './Pool.js';

export default async function Query(text, params) {
    const res = await Pool.query(text, params);
    return res
};