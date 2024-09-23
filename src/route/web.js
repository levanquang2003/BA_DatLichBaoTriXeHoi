import express from "express";
import homecontroller from "../controllers/homeController"
import usercontroller from "../controllers/userController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homecontroller.getHomePage);
    router.get("/crud", homecontroller.getCRUD);
    router.post("/post-crud", homecontroller.postCRUD);
    router.get("/get-crud", homecontroller.displayGetCRUD);
    router.get("/edit-crud", homecontroller.getEditCRUD);
    router.post("/put-crud", homecontroller.putCRUD);
    router.get("/delete-crud", homecontroller.deleteCRUD);

    router.post("/api/login", usercontroller.handleLogin);
    router.get("/api/get-all-users", usercontroller.handleGetAllUsers);
    router.post("/api/create-new-user", usercontroller.handleCreateNewUser);
    router.put("/api/edit-user", usercontroller.handleEditUser);
    router.delete("/api/delete-user", usercontroller.handleDeleteUser);


    return app.use("/", router);
}

module.exports = initWebRoutes; 