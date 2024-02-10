export const FetchIdShip = async ({ nameShip }: { nameShip: string }) => {
    return await fetch(`http://localhost:8080/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: `
            query Query($nameShip: String!) {
                NameToId(NameShip: $nameShip) {
                  gid
                  name
                }
              }
          `,
            variables: {
                nameShip: nameShip,
            },
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};
