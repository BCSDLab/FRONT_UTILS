/** 여러 개의 className을 합치는 함수 */
export function cn(classes) {
    return Object.entries(classes)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(' ');
}
