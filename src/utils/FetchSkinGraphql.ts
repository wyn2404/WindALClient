import axios from "axios";

export const FetchShip = async ({
    idShip,
    query,
}: {
    idShip?: number;
    query: string;
}) => {
    return await axios({
        url: "http://localhost:8080/graphql",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        data: JSON.stringify({
            query: query,
            variables: {
                idShip: idShip,
            },
        }),
    })
        .then((data) => {
            return data.data;
        })
        .catch((error) => {
            return error;
        });
};
