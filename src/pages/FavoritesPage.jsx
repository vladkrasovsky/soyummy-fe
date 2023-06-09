import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { scrollToTop } from 'utils/scrollToTop';

const FavoritesPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>My favorites</title>
      </Helmet>
      <div className="container">
        <MainPageTitle
          pageTitle={'Favorites'}
          className={'main-title pb-[50px] md:pb-[72px]'}
        />
        <section className="bg-[#FAFAFA] dark:bg-accentDarker">
          <FavoriteList />
        </section>
      </div>
    </>
  );
};

export default FavoritesPage;
