import React from 'react';

import Footer from '../../components/Footer/Footer';
// import ResultButton from '../../components/ResultButton/ResultButton';
import SearchBar from '../../components/SearchBar/SearchBar';
import GroupsList from '../../components/GroupsList/GroupsList';

import styles from './Groups.module.scss';

export default function Groups() {
    return (
        <div className={styles.root}>
            <SearchBar />
            <GroupsList />
            <GroupsList />
            <GroupsList />
            <GroupsList />
            {/* <ResultButton /> */}
            <Footer />
        </div>
    )
}
