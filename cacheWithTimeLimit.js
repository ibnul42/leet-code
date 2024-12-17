var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const exists = this.cache.has(key);
    if (exists) clearTimeout(this.cache.get(key).timeout);
    this.cache.set(key, {
        value,
        timeout: setTimeout(() => this.cache.delete(key), duration)
    });
    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.cache.get(key)?.value ?? -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size
};

const timeLimitedCache = new TimeLimitedCache()
const set = timeLimitedCache.set(1, 42, 1000); // false
const get = timeLimitedCache.get(10) // 42
const count = timeLimitedCache.count() // 1

console.log(set, get, count)