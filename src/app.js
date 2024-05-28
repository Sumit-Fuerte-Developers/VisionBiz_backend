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

const creaditorsrouter = require("./routes/creaditars_opening_routes");
app.use("/api/creditors_opening", creaditorsrouter);

const partyrouter = require("./routes/party_routes");
app.use("/api/party", partyrouter);

const BankRecorouter = require("./routes/bank_reco_routes");
app.use("/api/bank_reco", BankRecorouter);

const UpdatePartyWIserouter = require("./routes/update_party_wise_formdata_routes");
app.use("/api/update", UpdatePartyWIserouter);


const openingImeirouter = require("./routes/opening_imei_routes");
app.use("/api/opening_imei", openingImeirouter);

// For Item
const ItemRoute = require("./routes/item_routes");
app.use("/api/item",ItemRoute);


// Store Master
const StoreMasterRoute = require("./routes/store_master_routes");
app.use("/api/store_master", StoreMasterRoute);

// Product Group Master
const ProductGroupMasterRoute = require("./routes/product_groups_master_routes");
app.use("/api/product_group_master", ProductGroupMasterRoute);

// Product Class 
const ProductClassRoute = require("./routes/product_class_routes");
app.use("/api/product_class", ProductClassRoute);

// Department Master
const DepartmentMasterRoute = require("./routes/department_master_routes");
app.use("/api/department_master", DepartmentMasterRoute);


// party wise Product rate
const PartyWiseProductrouter = require("./routes/party_wise_product_rate_routes");
app.use("/api/party_wise_product_rate", PartyWiseProductrouter);

const partywiseProductRateDiscountrouter = require("./routes/party_wise_product_rate_discount_routes");
app.use("/api/party_wise_product_rate_discount", partywiseProductRateDiscountrouter);


const partywiseProductGroupRateDiscountController = require("./routes/party_wise_productGroup_wiseDiscount_routes");
app.use("/api/party_wise_product_rate_discount", partywiseProductGroupRateDiscountController);

// UOM Master
const UOMMasterRoute = require("./routes/uom_master_routes");
app.use("/api/uom_master", UOMMasterRoute);

const ProductWisepartyRateDiscountrouter = require("./routes/productWisePartyRateDiscount_routes");
app.use("/api/Product_wise_party_rate_discount", ProductWisepartyRateDiscountrouter);



// For Measurement
const MeasurementRoute = require("./routes/measurement_routes");
app.use("/api/measurement", MeasurementRoute);

// For HSN
const HSNRoute = require("./routes/hsn_routes");
app.use("/api/HSN", HSNRoute);

// For TexCode
const TexCodeRoute = require("./routes/tax_code_routes");
app.use("/api/TexCode", TexCodeRoute);

// For Product Master
const ProductMasterRoute = require("./routes/product_master_routes");
app.use("/api/ProductMaster", ProductMasterRoute);

// For Bank Master
const BankMasterRoute = require('./routes/bank_master_routes');
app.use("/api/bankMaster", BankMasterRoute);

// For Narration Master
const NarrationMasterRoute = require('./routes/narration_master_routes');
app.use("/api/narrationMaster", NarrationMasterRoute);

// For Broker Master
const BrokerMasterRoute = require('./routes/broker_master_routes');
app.use("/api/brokerMaster", BrokerMasterRoute);

// For Account Group
const Accountgroup = require("./routes/account_group_routes");
app.use("/api/accountGroup", Accountgroup);

// const groupReverse = require("./routes/group_if_reverse_route");
// app.use("/api/accountGroupReverse", groupReverse);

const CompanyLoginRoutes = require("./routes/CompanyLogin_routes");
app.use("/api/company_signIn", CompanyLoginRoutes);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});