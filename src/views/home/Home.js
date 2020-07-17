import React, { useContext } from 'react';

import SummonButton from '../../components/summonButton/summonButton';
import ActivateButton from '../../components/activateButton/ActivateButton';
import DaohausCastle from '../../assets/daohaus__brand--castle.svg';
import GetStartedBackground from '../../assets/daohaus__seciton5-bg-shapes.png';
import FallingBackground from '../../assets/daohaus__hero--falling.png';
import DaohausLogo from '../../assets/logo.png';
import RandomBackground from '../../assets/random-bg.png';
import HeroMGD from '../../assets/featured/Hero__MGD--1.jpeg';
import AvatarMetaCartel from '../../assets/featured/metacartel__avatar.jpg';

import TelegramLogo from '../../assets/telegram__logo.png';
import { TwitterCircleFilled } from '@ant-design/icons';

import './Home.scss';
import { Web3Context } from '../../contexts/ContractContexts';

const heroSlides = [
  {
    heading: 'Juliana, Summoner of Meta Gamma Delta',
    content:
      'At Meta Gamma Delta, we learned that there are Membership proposals and also Funding Proposals. And how can projects be funded? Based on voting! Simple, easy, brilliant.',
    image: HeroMGD,
  },
  {
    heading: 'Peter, Summoner of MetaCartel',
    content: '',
    image: '',
  },
  {
    heading: 'Makoto, Summoner of Orochi DAO',
    content: '',
    image: '',
  },
];

const daohausFeatures = [
  {
    sub: 'Share Goals',
    content:
      'Collaborate with anyone, anywhere in an unstoppable organization that lives on the internet.',
  },
  {
    sub: 'Share Money',
    content:
      'Raise money and spend it together on shared goals with 100% transparency.',
  },
  {
    sub: 'Share Power',
    content:
      'Everyone has a voice. Not a single dollar can be spent without a community vote.',
  },
];

const featuredCommunities = [
  {
    name: 'MetaCartel',
    sub: 'Digital Nation for Web3',
    raised: '$218,120',
    members: 91,
    top: 100,
    left: 250,
    image: AvatarMetaCartel,
  },
  {
    name: 'Machi X',
    sub: 'Network of Crypto Artists',
    raised: '$840,906',
    members: 16,
    top: 0,
    left: 675,
    image: AvatarMetaCartel,
  },
  {
    name: 'Venture DAO',
    sub: 'Digital Nation for Web3',
    raised: '$840,906',
    members: 16,
    top: 250,
    left: 450,
    image: AvatarMetaCartel,
  },
  {
    name: 'Raid Guild',
    sub: 'Digital Cooperative of Builders',
    raised: '$18,329',
    members: 54,
    top: 400,
    left: 150,
    image: AvatarMetaCartel,
  },
  {
    name: 'Meta Gamma Delta',
    sub: 'Support female-led initiatives.',
    raised: '$6,480',
    members: 63,
    top: 450,
    left: 725,
    image: AvatarMetaCartel,
  },
];

const pricingPacks = [
  {
    name: 'Starter',
    features: [
      'Launch Infinite Communities',
      'Invite Infinite Collaborators',
      'Submit Infinite Proposals and Votes',
    ],
    price: 'Free Forever',
  },
  {
    name: 'Pro',
    features: ['All Free Boosts', '+ Custom Theme', '+ Social Notifications'],
    price: '$10/mo',
  },
  {
    name: 'Super',
    features: ['All Free & Pro Boosts', '+ Minion', '+ Legal Wrapper'],
    price: '$25/mo',
  },
];

const integrationLogos = [
  {
    img: 'telegram__logo.png',
    alt: 'Telegram',
    top: 115,
    left: 45,
  },
  {
    img: 'discord__logo.png',
    alt: 'Discord',
    top: 15,
    left: 150,
  },
  {
    img: 'airtable__logo.png',
    alt: 'Airtable',
    top: 200,
    left: 150,
  },
];

const Home = () => {
  const [web3context] = useContext(Web3Context);

  return (
    <>
      <div className="HomeHero">
        <div className="SummonHero">
          <img src={DaohausCastle} alt="DAOHAUS" />
          <h1>
            Magic internet
            <br />
            communities* for all.
            <span>*DAOs ;)</span>
          </h1>
          {web3context && web3context.account ? (
            <SummonButton />
          ) : (
            <ActivateButton msg={'Sign in'} />
          )}
        </div>
        <div className="Carousel">
          <div
            className="Carousel__Slide"
            style={{ backgroundImage: 'url(' + HeroMGD + ')' }}
          >
            <div className="Content">
              <p>
                Before having a DAO, I was already seeding and flourishing a
                chat group of blockchain developers. Even though there is a lot
                of engagement in the chat channel, in a DAO things get more
                serious. The sense of commitment is much more developed.
              </p>
              <h4>
                Juliana, Summoner of <strong>Meta Gamma Delta</strong>
              </h4>
            </div>
            <div className="Overlay" />
          </div>
        </div>
      </div>
      <div className="Features Block">
        <div className="Block__Contents">
          <div className="Row">
            <div
              className="FeaturesHeading"
              style={{ flexDirection: 'column' }}
            >
              <h5>Ya’ll just chattin smh</h5>
              <h2>Share resources and get shit done. Together.</h2>
            </div>
            <div className="AmountRaised">
              <p>
                <span>$5,420,609 raised</span>
                <br />
                $3,128,476 spent
              </p>
            </div>
          </div>
          <div className="FeaturesList">
            {daohausFeatures.map(feature => {
              return (
                <div key={feature.sub}>
                  <h4>{feature.sub}</h4>
                  <p>{feature.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="Block Communities"
        style={{ backgroundImage: 'url(' + RandomBackground + ')' }}
      >
        <div className="Block__Contents">
          <div className="CommunitiesHeading">
            <h3>
              We{' '}
              <span role="img" aria-label="Love">
                ❤️
              </span>{' '}
              Communities
            </h3>
          </div>
          <div className="FeaturedCommunities">
            {featuredCommunities.map(community => {
              return (
                <div key={community.name} className="FeaturedCommunity">
                  <h4>{community.name}</h4>
                  <p>{community.sub}</p>
                  <p>
                    {community.raised} | {community.members} Members
                  </p>
                  <div
                    className="FeaturedCommunity__Avatar"
                    style={{ backgroundImage: 'url(' + community.image + ')' }}
                  >
                    <span>&nbsp;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="Row GetStarted"
        style={{ backgroundImage: 'url(' + GetStartedBackground + ')' }}
      >
        <div>
          <h2>
            Don’t be shy. Discover and join a decentralized community today.
          </h2>
          <button className="Big">Explore</button>
        </div>
      </div>
      <div className="Boosts Block">
        <div className="Block__Contents">
          <div className="BoostsHeading">
            <h2>Boost Packs</h2>
            <h4>Level up your community, or gift to another.</h4>
          </div>
          <div className="BoostsPricing GridList">
            {pricingPacks.map(pack => {
              return (
                <div key={pack.name} className="Boost GridList__Item">
                  <h2>{pack.name}</h2>
                  <ul>
                    {pack.features.map(feature => {
                      return <li key={feature}>{feature}</li>;
                    })}
                  </ul>
                  <button className="Big" disabled="true">
                    {pack.price}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="Block DaoConsultation"
        style={{ backgroundImage: 'url(' + FallingBackground + ')' }}
      >
        <div className="Block__Contents">
          <div className="Column">
            <h2>Every community is unique, just like the people in it.</h2>
            <h4>
              DaoHaus can integrate with whatever tools your community needs.
              <br />
              <br />
              The possibilities are truly infinite.
            </h4>
            <button className="Big">Book a Consultation</button>
          </div>
          <div className="Icons">
            {integrationLogos.map(logo => {
              return (
                <img
                  src={require('../../assets/' + logo.img)}
                  alt={logo.alt}
                  key={logo.alt}
                  style={{ top: logo.top, left: logo.left }}
                  className="Icon"
                  key={logo.img}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="Block Footer">
        <div className="Block__Contents">
          <div className="Mark">
            <img src={DaohausLogo} alt="DaoHaus Logo" />
          </div>
          <div className="Social">
            <a href="https://t.me/daohaus">
              <TwitterCircleFilled />
            </a>
            <a href="https://twitter.com/daohaus">
              <TwitterCircleFilled />
            </a>
            <a href="https://twitter.com/daohaus">
              <TwitterCircleFilled />
            </a>
            <a href="https://twitter.com/daohaus">
              <TwitterCircleFilled />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
