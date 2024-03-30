const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();


const cors = require('cors'); 

const PORT = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

mongoose.connect('mongodb+srv://vishalfuerte978:21112002123@cluster0.vahtrpp.mongodb.net/visonbiz?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
    console.log('Connection successful');
    // add your routes here
    app.get('/', (req, res) => {
      return res.send('hello from home page 123');
    });
}).catch((err) => {
    console.error('Connection error:', err);
});

const Companyrouter = require("./routes/create_company_routes");
app.use("/api", Companyrouter);

const TextMasterrouter = require("./routes/add_text_master_routes");
app.use("/api/text-master", TextMasterrouter);

const AreaMasterrouter = require("./routes/add_area_master_routes");
app.use("/api/area-master", AreaMasterrouter);

const CategoryMasterrouter = require("./routes/add_category_master_routes");
app.use("/api/category-master", CategoryMasterrouter);

const PartyGroupMasterrouter = require("./routes/add_party_group_master_routes");
app.use("/api/party_group-master", PartyGroupMasterrouter);

const SalesPurchesrouter = require("./routes/sales_purches_charges_setup_routes");
app.use("/api/sales_purches_charges", SalesPurchesrouter);

const Salesmanrouter = require("./routes/salesman_master_routes");
app.use("/api/salesman", Salesmanrouter);

const Transporterrouter = require("./routes/transporter_master_routes");
app.use("/api/transporter", Transporterrouter);

const partyPurchesrouter = require("./routes/party_purches_charge_constant_routes");
app.use("/api/partypurches", partyPurchesrouter);


const tdsrouter = require("./routes/tds_master_routes");
app.use("/api/tds_master", tdsrouter);

const partySalesrouter = require("./routes/party_sales_charge_constant_routes");
app.use("/api/partysales", partySalesrouter);

const usersRoute = require("./routes/users_routes");
app.use("/api/userinfo", usersRoute);

// Account Master
const AccountMasterRoute = require("./routes/account_master_routes");
app.use("/api/account_master", AccountMasterRoute);

// Despatch Form
const DespatchFormRoute = require("./routes/despatch_form_routes");
app.use("/api/despatch", DespatchFormRoute);

// Shade Master
const ShadeMasterRoute = require("./routes/shade_master_routes");
app.use("/api/shade_master", ShadeMasterRoute);

// SubAccountMaster
const SubAccountMasterRoute = require("./routes/sub_account_master_routes");
app.use("/api/sub_account_master", SubAccountMasterRoute);

const TypeTaxrouter = require("./routes/type_and_text_code_master_routes");
app.use("/api/type_tax_master", TypeTaxrouter);

const BranchMasterRoute = require("./routes/branch_master_routes");
app.use("/api/branch_master", BranchMasterRoute);

const DebatorOpningrouter = require("./routes/debator_opning_routes");
app.use("/api/debator_opning", DebatorOpningrouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});