---
date: "2019-09-24"
type: "article"
tags: "Berlin"
title: "Architecture in React"
abstract: "bla bla bla"
---
Started and completely built a tool called **"Loop Now"** which an agile software tool to control and monitor feedback in a company.

It gives you a complete survey functionality and to display the data in several ways to find out what and where to improve. 

```js{4,19,2}
  const CustomChip: FC<Props> = ({ value, locked }) => {
  const onItemClick = () => {
    if (value.onRemove) {
      value.onRemove(value);
    }
  };
  return (
    <div locked={locked}>
      <AvatarBox
        type={value.type}
        name={value.name || (getNameOfSegment(value) || undefined)}
        url={value.image_url}
        size={25}
      />
      <span>{value.name || getNameOfSegment(value)}</span>
      {!locked && (
        <CloseIcon onClick={onItemClick}>
          <SvgIcon width="15px" name="iconCrossInCircle" />
        </CloseIcon>
      )}
    </div>
  );
  };
```
