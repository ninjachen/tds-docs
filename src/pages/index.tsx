import React, { Fragment } from 'react';
import Head from '@docusaurus/Head';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Link } from 'react-router-dom';
import Layout from "@theme/Layout";
import styles from './styles.module.scss';
import { entryList } from "./_config";

const HomePage = () => {
  const { siteConfig, i18n: { currentLocale, defaultLocale } } = useDocusaurusContext();
  const isDefaultLocale = currentLocale === defaultLocale;
  const localePath = isDefaultLocale ? '' : `${currentLocale}/`;
  return <Layout>
    <Head>
      <title>{siteConfig.title}</title>
    </Head>
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.topTitle}>
          <img src={useBaseUrl('img/logo.svg')} alt="TapTap" />
          <Translate id="tds-home-开发者文档中心" description="from HomePage Title">开发者文档中心</Translate>
        </div>
        <div className={styles.topSubtitle}>
          <Translate id="tds-home-这里为用户提供游戏开发者相关文档和常见问题，包含游戏商店设置、SDK功能说明及TapTap品牌资源下载。"
            description="from HomePage Subtitle">
            这里为用户提供游戏开发者相关文档和常见问题，包含游戏商店设置、SDK功能说明及TapTap品牌资源下载。
          </Translate>
        </div>
        <Link className={styles.topEntryButton} to="store/store-register">
          <Translate id="tds-home-入门指南" description="from HomePage Main Button">入门指南</Translate>
        </Link>
        <div className={styles.entryContainer}>
          {entryList(localePath).map(item =>
            <div key={item.title} className={styles.entryCell}>
              <div>
                <div className={styles.entryCellTitle}>{item.title}</div>
                <div>{item.description}</div>
              </div>
              <div className={styles.entryCellActionContainer}>
                {item.links?.map((link, index, links) =>
                  <Fragment key={link.label}>
                    {
                      link.href
                        ? <a
                          className={styles.entryCellActionButton}
                          href={link.href}
                          rel='nofollow noopener'
                          target='_blank'
                        >
                          {link.label}
                        </a>
                        : <Link
                          className={styles.entryCellActionButton}
                          to={useBaseUrl(link.to)}
                        >
                          {link.label}
                        </Link>
                    }
                    {index < links.length - 1 && <div className={styles.entryCellActionDivider} />}
                  </Fragment>,
                )}
              </div>
            </div>)}
        </div>
      </div>
    </div>
  </Layout>;
};

export default HomePage;
