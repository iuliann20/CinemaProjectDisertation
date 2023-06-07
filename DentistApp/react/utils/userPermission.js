import { useSelector } from 'react-redux';

export const useUserPermission = () => {

    const accesLevel = useSelector((state)=> state.user.accesLevel);

    
    const isLevel = (level) => {
        return accesLevel == level;
    }

    const isLevelLessOrEqualThan = (level) => {
        return accesLevel <= level;
    }

    const isLevelGreaterOrEqualThan = (level) => {
        return accesLevel >= level;
    }

    return {
        isLevel,
        isLevelLessOrEqualThan,
        isLevelGreaterOrEqualThan
    }
}
