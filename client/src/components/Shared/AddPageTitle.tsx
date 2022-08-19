import { useEffect } from 'react';
import { AppConfigs } from '../../configs/AppConfigs';

const AddPageTitle = ({ title = "" }: { title: string }) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - ${AppConfigs.appName}`
        }
    }, [title])
    return null;
}

export default AddPageTitle