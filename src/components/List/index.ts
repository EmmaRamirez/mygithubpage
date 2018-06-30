import './List.styl';

import { Component } from 'utils';
import { Tags, TagsType } from '../Tags';

// TODO: Split into Article & Project interfaces
export interface Item {
  link: string;
  title: string;
  date?: string;
  description?: string;
  draft?: boolean;
  tags?: TagsType;
  image?: string;
  wip?: boolean;
  emoji?: string;
  hide?: boolean;
  lastUpdated?: any;
}

export interface ListOptions {
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface ListProps {
  items: Item[];
  options?: ListOptions;
  type?: string;
}

export class List extends Component<ListProps> {
  constructor(props: ListProps) {
    super(props);
  }

  public render() {
    const { items, options, type } = this.props;
    const condition = (condition: any, str: string) => {
      if (condition) return str;
      return '';
    };
    const ul = (innerContent: string) => {
      return `<ul class='${'list ' + (type || '')}'>${ innerContent }</ul>`;
    };
    if (type === 'projects') {
      return ul(items
                .map((item, key) => {
                  return condition(!item.hide, `
                    <li class='list-item project-item' data-key=${key} style='background-image: url(${item.image || ''})'>
                      <div class='item-last-updated'><img src=${item.lastUpdated} /></div>
                      <a class='project-overlay' href='${item.link}' target=${options ? options.target : '_self'}>
                        <div class='project-item-inner'>
                          <h4><span class='item-emoji'>${item.emoji}</span> ${ item.title }${condition(item.wip, `<span class='item-wip-badge'>WIP</span>`)}</h4>
                          <p>${ item.description }</p>
                          ${condition(item.tags, `<br/>${new Tags({ tags: item.tags } as any).render()}`)}
                        </div>
                      </a>
                    </li>
                  `);
                }).join(''));
    }
    return ul(items
              .filter(i => (i.draft == null ? true : !i.draft))
              .map((item, key) => {
                return `
                        <li class='list-item' data-key=${key}>
                            ${condition(item.emoji, `<span class='item-emoji'>${item.emoji}</span>`)}
                            <a href='${item.link}' target=${
                              options ? options.target : '_self'
                            }>${item.title}</a>
                            ${condition(item.wip, `<span class='item-wip-badge'>WIP</span>`)}
                            ${condition(item.description, `<span class='item-description'>${
                              item.description
                            }</span>`)}
                            ${condition(item.date, `<span class='item-date'>${item.date}</span>`)}
                            ${condition(item.tags, `<br/>${new Tags({ tags: item.tags } as any).render()}`)}
                        </li>`;
              })
              .join(''));
  }
}