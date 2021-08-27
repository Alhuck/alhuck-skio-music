
import React from 'react';
import { Container } from '@material-ui/core';
import { getTree } from '../../../services/tree.service';
import Cards from '../../core/Cards';
import LearnMoreContainer from '../../core/LearnMoreContainer';

export interface ITree {
    ID: string,
    CommonName: string,
    BinomialName: string,
    Climate: string,
    Evergreen: string,
    ProducesFruits: string,
    TypicalMaxHeightM: string,
    ImageURL: string,
    ImageCredit: string
}


const SmMainContent = (props: any) => {

    const [treeData, setTreeData]: any = React.useState([]);
    const [isTreeDetailsVisible, setIsTreeDetailsVisible] = React.useState(false);
    const [moreTreeDetails, setMoreTreeDetails] = React.useState({} as ITree);

    React.useEffect(() => {
        const fetchTree = async () => {
            const response = await getTree();
            setTreeData(response);
        }
        fetchTree();
    }, [])

    const showLearnMore = (canShowTreeDetails: boolean, treeDetails: any) => {
        setIsTreeDetailsVisible(canShowTreeDetails);
        setMoreTreeDetails(treeDetails);
    }

    return (
        <main className={props.themeCls.content}>
            <div className={props.themeCls.appBarSpacer} />
            <Container maxWidth="lg" className={props.themeCls.container}>

                {
                    isTreeDetailsVisible === false ? treeData.map((tree: any) => { return <Cards key={tree.ID} details={tree} showLearnMore={showLearnMore} /> }) :
                        <LearnMoreContainer {...moreTreeDetails} showLearnMore={showLearnMore} />
                }

            </Container>
        </main>
    );
}

export default SmMainContent;
