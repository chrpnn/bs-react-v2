// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export default function PrivateRoute({ element: Element }) {

//     // если пользователь авторизован, то currentUser будет содержать объект пользователя, иначе — null
//     const currentUser = useAuth();

//     // const [loading, setLoading] = React.useState(true);

//     // React.useEffect(() => {
//     //     if (currentUser !== null) {
//     //         setLoading(false);
//     //     }
//     // }, [currentUser]);

//     // if (loading) {
//     //     return <div>Loading...</div>; // Или любой другой индикатор загрузки
//     // }

//     if (currentUser) { 
//         return <Element />;
//     } else { 
//         return <Navigate to="/login" />;
//     }
// }