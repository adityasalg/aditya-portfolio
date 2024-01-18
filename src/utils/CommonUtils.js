export const getAge = (birthDate) => {
    const today = new Date()
    return Math.floor(( today.getTime() - new Date(birthDate).getTime()) / 3.15576e+10);
}
