import type { GetStaticProps, NextPage } from "next";
import Grid from "../common/components/grid/grid";
import { GridSection } from "../lib/umbraco/types/gridSection.type";
import { getErrorPage } from "../lib/umbraco/util/dataApi";
import LayoutHardCoded from "@components/layout/layout";
import { IParams } from "common/types/iparams.type";
import { HomeContent } from "content/home";
import Banner from "@components/grid/controls/widgets/banner/banner";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import Layout from "@components/layout/layout";
import PinnedLinks from "@components/grid/controls/widgets/pinnedLinks/pinnedLinks";
import Text from "@components/grid/controls/widgets/text/text";
import TextColumns from "@components/grid/controls/widgets/textColumns/textColumns";
import Carousel from "@components/grid/controls/widgets/carousel/carousel";
import { ImagesSlider } from "@components/fullScreenImageSlider/ImagesSlider";

export type HardCodedPageModel = {
  locale: string;
};

const Home: NextPage<HardCodedPageModel> = ({ locale }) => {
  return (
    <Layout>
      <Banner {...(HomeContent.banner!.imageLeftAligned as WidgetModel)} />
      <PinnedLinks {...(HomeContent.pinnedLinks!.top as WidgetModel)} />
      <Text {...(HomeContent.text!.theFinest as WidgetModel)} />
      <TextColumns
        {...(HomeContent.textColumns!.unmatchedQuality as WidgetModel)}
      />
      <Carousel {...(HomeContent.carousel!.boats as WidgetModel)} />
      <ImagesSlider/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  locale,
}) => {
  return {
    props: {
      locale,
    },
    revalidate: 10,
  };
};

export default Home;
