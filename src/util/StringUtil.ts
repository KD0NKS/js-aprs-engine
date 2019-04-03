export default class StringUtil {
    public static IsNullOrWhiteSpace(val: string): boolean {
        return val == null || val.trim().length === 0;
    }
}