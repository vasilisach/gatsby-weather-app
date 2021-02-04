import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type City = {
  __typename?: 'City';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  coord?: Maybe<Coordinates>;
  weather?: Maybe<Weather>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lon?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
};

export type Summary = {
  __typename?: 'Summary';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type Temperature = {
  __typename?: 'Temperature';
  actual?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
};

export type Wind = {
  __typename?: 'Wind';
  speed?: Maybe<Scalars['Float']>;
  deg?: Maybe<Scalars['Int']>;
};

export type Clouds = {
  __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
};

export type Weather = {
  __typename?: 'Weather';
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  wind?: Maybe<Wind>;
  clouds?: Maybe<Clouds>;
  timestamp?: Maybe<Scalars['Int']>;
};

export type ConfigInput = {
  units?: Maybe<Unit>;
  lang?: Maybe<Language>;
};

export type Query = {
  __typename?: 'Query';
  getCityByName?: Maybe<City>;
  getCityById?: Maybe<Array<Maybe<City>>>;
};


export type QueryGetCityByNameArgs = {
  name: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  config?: Maybe<ConfigInput>;
};


export type QueryGetCityByIdArgs = {
  id?: Maybe<Array<Scalars['String']>>;
  config?: Maybe<ConfigInput>;
};

export enum Unit {
  Metric = 'metric',
  Imperial = 'imperial',
  Kelvin = 'kelvin'
}

export enum Language {
  Af = 'af',
  Al = 'al',
  Ar = 'ar',
  Az = 'az',
  Bg = 'bg',
  Ca = 'ca',
  Cz = 'cz',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  It = 'it',
  Ja = 'ja',
  Kr = 'kr',
  La = 'la',
  Lt = 'lt',
  Mk = 'mk',
  No = 'no',
  Nl = 'nl',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_br',
  Ro = 'ro',
  Ru = 'ru',
  Sv = 'sv',
  Se = 'se',
  Sk = 'sk',
  Sl = 'sl',
  Sp = 'sp',
  Es = 'es',
  Sr = 'sr',
  Th = 'th',
  Tr = 'tr',
  Ua = 'ua',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_cn',
  ZhTw = 'zh_tw',
  Zu = 'zu'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type WeatherDataQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type WeatherDataQuery = (
  { __typename?: 'Query' }
  & { getCityByName?: Maybe<(
    { __typename?: 'City' }
    & Pick<City, 'id' | 'name' | 'country'>
    & { weather?: Maybe<(
      { __typename?: 'Weather' }
      & Pick<Weather, 'timestamp'>
      & { summary?: Maybe<(
        { __typename?: 'Summary' }
        & Pick<Summary, 'title' | 'description' | 'icon'>
      )>, temperature?: Maybe<(
        { __typename?: 'Temperature' }
        & Pick<Temperature, 'actual' | 'feelsLike' | 'min' | 'max'>
      )>, wind?: Maybe<(
        { __typename?: 'Wind' }
        & Pick<Wind, 'speed' | 'deg'>
      )>, clouds?: Maybe<(
        { __typename?: 'Clouds' }
        & Pick<Clouds, 'all' | 'visibility' | 'humidity'>
      )> }
    )> }
  )> }
);


export const WeatherDataDocument = gql`
    query WeatherData($name: String!) {
      getCityByName(name: $name) {
        name
        country
        weather {
          summary {
            description
          }
          temperature {
            actual
            feelsLike
            min
            max
          }
          wind {
            speed
          }
        }
      }
    }
  `;

/**
 * __useWeatherDataQuery__
 *
 * To run a query within a React component, call `useWeatherDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeatherDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeatherDataQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useWeatherDataQuery(baseOptions: Apollo.QueryHookOptions<WeatherDataQuery, WeatherDataQueryVariables>) {
        return Apollo.useQuery<WeatherDataQuery, WeatherDataQueryVariables>(WeatherDataDocument, baseOptions);
      }
export function useWeatherDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WeatherDataQuery, WeatherDataQueryVariables>) {
          return Apollo.useLazyQuery<WeatherDataQuery, WeatherDataQueryVariables>(WeatherDataDocument, baseOptions);
        }
export type WeatherDataQueryHookResult = ReturnType<typeof useWeatherDataQuery>;
export type WeatherDataLazyQueryHookResult = ReturnType<typeof useWeatherDataLazyQuery>;
export type WeatherDataQueryResult = Apollo.QueryResult<WeatherDataQuery, WeatherDataQueryVariables>;