import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
import Loading from "./Loading.js";
import PropTypes from 'prop-types';
export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Donald Trump: Midterms point to rising challenges for former president",
      description:
        "The midterms have thrown into question the viability of the former president's political brand.",
      url: "http://www.bbc.co.uk/news/world-us-canada-63569844",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/114D7/production/_127517807_nzn2kzzg.png",
      publishedAt: "2022-11-09T15:37:19.8791039Z",
      content:
        'Standing before a crowd of adoring supporters in Ohio earlier this week, former President Donald Trump made a promise: a "big announcement" on 15 November, exactly a week after a predicted "red wave"… [+5381 chars]',
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Brittney Griner: Jailed US basketball star moved to Russian penal colony",
      description:
        'While the use of cannabis is illegal in Russia, Moscow has been accused of using the WNBA star "as a political pawn".',
      url: "http://www.bbc.co.uk/news/world-us-canada-63570787",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/F5B0/production/_127569826_5469b7affa56bcb5bf4b79b7ef566d0d71cd840c.jpg",
      publishedAt: "2022-11-09T14:52:19.6765354Z",
      content:
        "Jailed US basketball star Brittney Griner is being moved from a Russian prison to a penal colony.\r\nShe was arrested at an airport near Moscow in February when cannabis oil vapes were found in her bag… [+3616 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Abortion election results: Kentucky poised for pro-choice win",
      description:
        "Four other states have also voted on abortion rights - an issue close to the top of voters' priorities.",
      url: "http://www.bbc.co.uk/news/world-us-canada-63564062",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7306/production/_127564492_microsoftteams-image-30.png",
      publishedAt: "2022-11-09T14:07:16.3018529Z",
      content:
        "Abortion advocates in Kentucky are poised for an underdog victory, as the final votes are counted in a state referendum on an anti-abortion measure. The result here will follow three other pro-choice… [+5384 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Kherson Russian-appointed deputy governor Stremousov 'killed in car crash'",
      description:
        "Russian-installed deputy governor Kirill Stremousov has died in a car crash, Russian media report.",
      url: "http://www.bbc.co.uk/news/world-europe-63572668",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2022-11-09T13:52:19.5841473Z",
      content:
        "The Russian-installed deputy governor of Kherson, Kirill Stremousov, has been killed, Russian state media say.\r\nThey quoted the regional governor's press service as saying he died in a car crash.\r\nMr… [+273 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ancient Rome: Stunningly preserved bronze statues found in Italy",
      description:
        'The discovery of 24 statues thought to be around 2,300 years old may "rewrite history", an expert says.',
      url: "http://www.bbc.co.uk/news/world-europe-63564404",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1597E/production/_127564488_romanstatue-index.jpg",
      publishedAt: "2022-11-09T13:07:20.3950343Z",
      content:
        "Italian archaeologists have unearthed 24 beautifully preserved bronze statues in Tuscany believed to date back to ancient Roman times. \r\nThe statues were discovered under the muddy ruins of an ancien… [+1493 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "FTX: Cryptocurrency market rocked by near-collapse of exchange",
      description:
        'FTX struck a bailout deal with larger rival Binance as it faced a "significant liquidity crunch".',
      url: "http://www.bbc.co.uk/news/business-63564364",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/B23A/production/_127562654_ftx.jpg",
      publishedAt: "2022-11-09T12:07:22.9107794Z",
      content:
        "The digital assets market has been rocked by the near-collapse of one of the world's biggest cryptocurrency exchanges, FTX.\r\nOn Tuesday, FTX struck a bailout deal with larger rival Binance after a su… [+1947 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Gavin Williamson: Rishi Sunak faces questions following resignation",
      description:
        "The PM's judgement is likely to come under scrutiny after his minister quits following bullying claims.",
      url: "http://www.bbc.co.uk/news/uk-politics-63563639",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/37F6/production/_127562341_5f70e49814992636cf71f79e99e95a44bb4a58a60_114_5782_32531000x563.jpg",
      publishedAt: "2022-11-09T11:52:23.2394221Z",
      content:
        "Rishi Sunak's judgement is under scrutiny after cabinet minister Sir Gavin Williamson quit vowing to clear his name over bullying claims.\r\nMr Sunak faces Prime Minister's Questions where he is set to… [+6416 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Facebook-owner Meta to cut 13% of its workforce",
      description:
        "Chief executive Mark Zuckerberg said it was one of the most difficult changes in Meta's history.",
      url: "http://www.bbc.co.uk/news/technology-63568585",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2022-11-09T11:37:30.1136608Z",
      content:
        "Meta, which owns Facebook, Instagram and WhatsApp, has announced that it will cut 13% of its workforce.\r\nIn total 11,000 employees are to be laid off from its worldwide headcount of 87,000 people.\r\nI… [+251 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Donald Trump warns Ron DeSantis against 2024 presidential bid",
      description:
        "The ex-president says Florida's governor would be wrong to challenge him for the Republican nomination.",
      url: "http://www.bbc.co.uk/news/world-us-canada-63563862",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/D7BA/production/_127562255_gettyimages-1055820228.jpg",
      publishedAt: "2022-11-09T10:37:17.7385124Z",
      content:
        "Donald Trump has warned Florida's Governor Ron DeSantis against running for president in 2024, saying doing so would harm the Republican Party.\r\nHe also threatened to release unflattering information… [+2406 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "US airport finds gun stuffed in chicken by traveller",
      description:
        "The fowl plan is cracked before boarding by officers at Florida's Fort Lauderdale-Hollywood Airport.",
      url: "http://www.bbc.co.uk/news/world-us-canada-63564405",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/FED4/production/_127563256_gettyimages-1262815975.jpg",
      publishedAt: "2022-11-09T04:22:23.6300772Z",
      content:
        "US transport officials have roasted a passenger online after they were caught trying to smuggle a gun on to a plane by hiding it inside a raw chicken.\r\nThe fowl plot was cracked by Transportation Sec… [+1809 chars]",
    },
  ];
  static defaultProps={
    country:"in",
    pageSize : 6,
    category : "entertainment",
  }
  static propType={
    country :PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f1f5a9bdd34e462d9c0a5c803ef1a94d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading:false
    });
  }
  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f1f5a9bdd34e462d9c0a5c803ef1a94d&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      loading:false
    });
    this.setState({
      page: this.state.page - 1,
    });
    console.log("previous : " + this.state.page);
  };
  handlenext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) { } 
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f1f5a9bdd34e462d9c0a5c803ef1a94d&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
        articles: parseddata.articles,
        page: this.state.page + 1,
        loading:false
      });
      console.log("next : " + this.state.page);
    }
  };
  render() {
    return (
      <div className="container my-4">
        <h1 align="center" style={{margin: "100px 0px"}}>Daily News HeadLines</h1>
        {this.state.loading && <Loading/>}
        <h5 align="center" style={{color:"royalblue"}}>
          PAGE NO: {this.state.page}
        </h5>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 20) : ""}
                  description={
                    element.description ? element.description.slice(0, 40) : ""
                  }
                  imgurl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
          <div className="container  d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-info"
              onClick={this.handleprev}
            >
              <b>&#8606;previous</b>
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 9)
              }
              type="button"
              className="btn btn-info"
              onClick={this.handlenext}
            >
              <b>next&#8608;</b>
            </button>
          </div>
          <h5 align="center" style={{color:"royalblue"}}>
          PAGE NO: {this.state.page}
        </h5>
        </div>
      </div>
    );
  }
}

export default News;
