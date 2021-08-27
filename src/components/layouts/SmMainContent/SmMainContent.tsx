
import React from 'react';
import { Container } from '@material-ui/core';
import { getTree } from '../../../services/tree.service';
import Cards from '../../core/Cards';




const SmMainContent = (props: any) => {

    const [treeData, setTreeData]: any = React.useState([]);

    React.useEffect(() => {
        const fetchTree = async () => {
            const response = await getTree();
            setTreeData(response);
        }
        fetchTree();
    }, [])

    return (
        <main className={props.themeCls.content}>
            <div className={props.themeCls.appBarSpacer} />
            <Container maxWidth="lg" className={props.themeCls.container}>
                {treeData.map((tree: any) => { return <Cards key={tree.ID}details={tree} /> })}
            </Container>
        </main>
    );
}

export default SmMainContent;
