export const FetchShip = async () => {
    return await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: `
            query Query($idShip: Int!) {
              Ship(IdShip: $idShip) {
                Skins {
                    id
                    name
                    shipyard
                    icon
                    desc
                    painting
                }
                AboutShip {
                    gid
                    name
                }
              }
            }
          `,
            variables: {
                idShip: 30511,
            },
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};