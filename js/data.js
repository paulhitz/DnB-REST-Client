/**
 * Constants used to populate the UI and to determine the endpoint to call.
 */
angular.module('clientApp').constant('SERVICES_CONFIG', {

	environments : [ {
		id : "qa",
		label : "QA"
	}, {
		id : "stg",
		label : "Staging"
	}, {
		id : "prod",
		label : "Production"
	} ],

	services : [ {
		id : "pcs",
		label : "Product Catalog Service (v2)",
		description : "The Product Catalog Service enables customers to get information on available products for the given DUNS# based on the entitlements of the customer's current contract.",
		group : "Common"
	}, {
		id : "linkage",
		label : "Linkage Service (v2)",
		description : "The Linkage service returns data about a single Global Family Tree (GFT).",
		group : "Common"
	}, {
		id : "match",
		label : "Match",
		description : "Searches for companies based on DUNS#. The Onboard application does NOT use the REST version of Match. It still uses the SOAP version.",
		group : "Search"
	}, {
		id : "global",
		label : "Global Name Search / Entity List Service (v4.0)",
		description : "Returns a set of companies based on DUNS# or keyword, along with basic identifying data for each company.",
		group : "Search"
	}, {
		id : "comp_vrf_rpt",
		label : "Compliance Verification Report (CMP_VRF_RPT)",
		description : "The Compliance Verification Service provides customers with a set of data to support entity verification needs as part of their compliance process. The Compliance Verification Report (CMP_VRF_RPT) product provides a detailed view of Firmographics, Principals, Linkage, Stock Listing and Regulator information of the business.",
		group : "Compliance Verification (v5.0)"
	}, {
		id : "comp_vrf_id",
		label : "Compliance Verification Identity (CMP_VRF_ID)",
		description : "The Compliance Verification Service provides customers with a set of data to support entity verification needs as part of their compliance process. The Compliance Verification Identity (CMP_VRF_ID) product provides a lightweight view of Firmographics, Principals, Linkage and Stock Listing information of the business.",
		group : "Compliance Verification (v5.0)"
	}, {
		id : "comp_gbo",
		label : "Global Beneficial Ownership (GBO)",
		description : "The GBO service combines global corporate linkage and individual share ownership. It enables a customer to establish direct and indirect Ultimate Beneficial Ownership at the level that is required for AML/KYC.",
		group : "Compliance Verification (v5.0)"
	}, {
		id : "comp_so",
		label : "Simple Ownership (SMPL_OWNSHP)",
		description : "Simplified Global Beneficial Ownership. Lacks share ownership for individuals and other details.",
		group : "Compliance Verification (v5.0)"
	}, {
		id : "comp_single_ownership",
		label : "Single Ownership (OWNSHP_VRF)",
		description : "Returns GBO data if available. Otherwise returns SIMPLE OWNERSHIP data.",
		group : "Compliance Verification (v5.0)"
	}, {
		id : "comp_kyc",
		label : "Know Your Customer (KYC)",
		description : "The KYC service provides critical compliance information on businesses and principles in 110 countries to ensure a business is compliant with AML regulations and KYC requirements.",
		group : "Compliance Verification (v5.0)"
	}, {
		id : "dcp_prem",
		label : "Firmographics (DCP_PREM)",
		description : "Provides basic marketing information such as business name, address, trade style, financials, number of employees etc. This is configured for DCP_PREM (Detailed Company Profile - Premium) level. Other levels include DCP_STD and DCP_ENH.",
		group : "Custom Product"
	}, {
		id : "kyc",
		label : "Know Your Customer (KYC)",
		description : "The KYC service provides critical compliance information on businesses and principles in 110 countries to ensure a business is compliant with AML regulations and KYC requirements.",
		group : "Custom Product"
	}, {
		id : "gbo",
		label : "Global Beneficial Ownership (GBO)",
		description : "The GBO service combines global corporate linkage and individual share ownership. It enables a customer to establish direct and indirect Ultimate Beneficial Ownership at the level that is required for AML/KYC.",
		group : "Custom Product"
	}, {
		id : "so",
		label : "Simple Ownership (SMPL_OWNSHP)",
		description : "Simplified Global Beneficial Ownership. Lacks share ownership for individuals and other details.",
		group : "Custom Product"
	}, {
		id : "cmp_rpt",
		label : "Compliance Verification Report (CMP_VRF_RPT)",
		description : "The Compliance Verification Service provides customers with a set of data to support entity verification needs as part of their compliance process. The Compliance Verification Report (CMP_VRF_RPT) product provides a detailed view of Firmographics, Principals, Linkage, Stock Listing and Regulator information of the business.",
		group : "Custom Product"
	}, {
		id : "cmp_id",
		label : "Compliance Verification Identity (CMP_VRF_ID)",
		description : "The Compliance Verification Service provides customers with a set of data to support entity verification needs as part of their compliance process. The Compliance Verification Identity (CMP_VRF_ID) product provides a lightweight view of Firmographics, Principals, Linkage and Stock Listing information of the business.",
		group : "Custom Product"
	}, {
		id : "cmp_bol",
		label : "Compliance Beneficial Ownership List (CMP_BOL)",
		description : "The 'Get List' operation focuses on the entities (corporate and natural persons) and their relationship back to the target DUNS with particular emphasis on identifying UBOs (Ultimate Beneficial Owners) and CBOs (Corporate Beneficial Owners).",
		group : "Ultimate Beneficial Ownership (UBO)"
	}, {
		id : "cmp_bos",
		label : "Compliance Beneficial Ownership Structure (CMP_BOS)",
		description : "The 'Get Full Structure' operation allows customers to understand all entities (corporate and natural persons) along with all of their individual relationships.",
		group : "Ultimate Beneficial Ownership (UBO)"
	}, {
		id : "portfolio_assets",
		label : "List Portfolio Asset (GET)",
		description : "Retrieve a list of assets stored by the Portfolio Service based on the Application Transaction ID and the Product ID.",
		group : "Portfolio"
	}, {
		id : "list_portfolio",
		label : "List Portfolio Service (POST)",
		description : "This service provides a convenient way to retrieve the list of available assets stored using the Portfolio Service.",
		group : "Portfolio"
	}, {
		id : "archive_portfolio_asset",
		label : "Archive Portfolio Service (POST)",
		description : "This service allows the customer to archive a new asset to their portfolio.",
		group : "Portfolio"
	}, {
		id : "ch_director_search",
		label : "Director Search (v1.0 - Obsolete)",
		description : "This service uses Companies House data. This particular operation searches for directors/officers. The last name (e.g. 'Smith') should be provided as a parameter.",
		group : "Companies House"
	}, {
		id : "ch_director_search_v3",
		label : "Director Search (v3.0)",
		description : "This service uses Companies House data. This particular operation searches for directors/officers. The name (e.g. 'Smith' or 'John Smith') should be provided as a parameter.",
		group : "Companies House"
	}, {
		id : "ch_director_order",
		label : "Officer Details (v1.0 - Obsolete)",
		description : "This service uses Companies House data. This particular operation provides more details about a specified officer/director. An 'Officer ID' should be passed as a parameter. The content of this parameter should be URL-encoded.",
		group : "Companies House"
	}, {
		id : "ch_director_order_v3",
		label : "Officer Details (v3.0)",
		description : "This service uses Companies House data. This particular operation provides more details about a specified officer/director. A 'Person ID' should be passed as a parameter. For example: '/officers/yg4yYWPJfQvJpXID4B0lbkmoA-I/appointments'",
		group : "Companies House"
	}, {
		id : "ch_filing_history",
		label : "Filing History (v2.0)",
		description : "This service uses Companies House data. This particular operation returns the Filing History (i.e. documents filed at Companies House) for the specified organization. A Registration Number (e.g. 05798215) should be passed as a parameter.",
		group : "Companies House"
	}, {
		id : "order_company_doc",
		label : "Report Product Service - Order Company Public Document",
		description : "This service is used to order BASE64-encoded PDF company documents. It can be used with Available Image List. This particular request is hard-coded to a specific company document. Based on DUNS number.",
		group : "Image Bank"
	}, {
		id : "pcs_public_docs",
		label : "Product Catalog Service - Available Image List",
		description : "This service enables the identification of all available company documents that have been filed for a specified UK company. Based on DUNS number.",
		group : "Image Bank"
	}, {
		id : "pcs_public_docs_filter",
		label : "Product Catalog Service - Filter Available Image List",
		description : "Returns all available company documents that have been filed for a specified UK company. Based on DUNS number. This request is hard-coded to filter by documents in the 'Annual Returns' category.",
		group : "Image Bank"
	}, {
		id : "img_pkg_image_list",
		label : "Public Document - Available Image List",
		description : "This operation returns a list of available company documents and details about each document (type, size etc.). Based on DUNS number.",
		group : "Image Bank"
	}, {
		id : "img_pkg_image_list_filter",
		label : "Public Document - Filter Available Image List",
		description : "This operation returns a filtered list of available company documents. Based on DUNS number. This request is hard-coded to filter by documents in the 'Annual Returns' category.",
		group : "Image Bank"
	}, {
		id : "img_pkg_download",
		label : "Public Document - Download Image Package",
		description : "Download an image package for the specified DUNS number. The Image Package is a Base-64 encoded PDF. Cover page information and the document package type are hard-coded.",
		group : "Image Bank"
	}, {
		id : "rdc_search",
		label : "RDC Search",
		description : "This service allows organizations to identify banned or suspect entities (suppliers, partners, customers, etc.) and individuals, strengthen fraud protection, ensure regulatory compliance and manage supply and distribution risk.",
		group : "ComplianceCheck (v1.0)"
	}, {
		id : "rdc_entity",
		label : "RDC Entity Information (Silvio Berlusconi)",
		description : "Request more information regarding the specified entity. This request is hard-coded with the entity ID of 'Silvio Berlusconi'.",
		group : "ComplianceCheck (v1.0)"
	}, {
		id : "rdc_entity_pdf",
		label : "RDC Entity Information - PDF (Silvio Berlusconi)",
		description : "Request a PDF with more information regarding the specified entity. This request is hard-coded with the entity ID of 'Silvio Berlusconi'.",
		group : "ComplianceCheck (v1.0)"
	}, {
		id : "rdc_alerts",
		label : "Monitoring - Alerts",
		description : "Allows a customer to retrieve a list of recent alerts triggered by active registrations across multiple subjects.",
		group : "ComplianceCheck (v1.0)"
	}, {
		id : "rdc_alerts_batch",
		label : "Monitoring - Alerts by Batch ID",
		description : "Allows a customer to retrieve a list of recent alerts filtered by Batch/Subject ID.",
		group : "ComplianceCheck (v1.0)"
	}, {
		id : "rdc_subject_alerts",
		label : "Monitoring - Subject Alerts (GET / PUT)",
		description : "Allows a customer to retrieve ('GET') the results from a successful subject registration. A 'PUT' request allows cancellation of a registration. A batch ID should be provided as a parameter.",
		group : "ComplianceCheck (v1.0)"
	}, {
		id : "rdc_register",
		label : "Monitoring - Register Entity (POST)",
		description : "Allows a customer to specify a subject (organizations and/or individuals) to be submitted for compliance screening using the ComplianceCheck service. A batch ID is returned.",
		group : "ComplianceCheck (v1.0)"
	}, {
		id : "gms_reg",
		label : "Registration (GET/POST/PUT)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_profile_create",
		label : "Profile List/Create (GET/POST)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_profile_param",
		label : "Profile Get/Update/Delete (GET/PUT/DELETE)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_notice_list",
		label : "Change Notice List (GET)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_notice_list_count",
		label : "Change Notice List Count (GET)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_notice_param",
		label : "Change Notice Update (PUT)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_subject",
		label : "Subject (GET)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_events",
		label : "Change Events (GET)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "gms_alert_report",
		label : "Alert Report (GET)",
		description : "The GMS service has limited documentation. The GMS endpoints configured in this tool are specific to the Onboard application.",
		group : "GMS Monitoring (Onboard Specific)"
	}, {
		id : "investigation",
		label : "Investigation Service (POST)",
		description : "A service for requesting investigations in order to obtain the most recent information on a business. Successful investigations result in the creation or revision of a Business Information Report (BIR).",
		group : "Miscellaneous"
	}, {
		id : "patriot_act",
		label : "Livingston Sanctions Watchlist Screening - Patriot Act (v4.0)",
		description : "Initiate a Livingston Screening request. Takes a query term to search against. E.g. 'Smith' or 'ISIS'. The user needs to be configured with a 'SubOrg' number for access to this service.",
		group : "Miscellaneous"
	}, {
		id : "sandbox_match",
		label : "On-Demand Entity Identification (Match)",
		description : "See D&B Direct 2.0 documentation for details of the sandbox (test environment). Search parameters are hard-coded.",
		group : "D&B Direct 2.0 Sandbox - Experimental"
	}, {
		id : "sandbox_dcp",
		label : "Detailed Company Profile (DCP_STD)",
		description : "See D&B Direct 2.0 documentation for details of the sandbox (test environment). DUNS# is hard-coded.",
		group : "D&B Direct 2.0 Sandbox - Experimental"
	}, {
		id : "date_test",
		label : "JSONTest.com Date/Time",
		description : "JSONTest.com is a testing platform for REST services.",
		group : "External (No Authentication Required)"
	}, {
		id : "open_company",
		label : "OpenCorporates - Companies Search",
		description : "Search the largest open database of companies in the world. Search by company name. E.g. Microsoft",
		group : "External (No Authentication Required)"
	}, {
		id : "open_officer",
		label : "OpenCorporates - Officers Search",
		description : "Directors Search from Open Corporates - The largest open database of companies in the world.",
		group : "External (No Authentication Required)"
	}, {
		id : "open_lei",
		label : "OpenCorporates - LEI Details",
		description : "Retrieve details about a specific LEI (Legal Entity Identifier). To avoid a HTTP 500 error, a valid LEI number is required as a parameter. E.g. RI37BMPWE56BCJ747E14",
		group : "External (No Authentication Required)"
	} ],

	endpoints : [ {
		env : "qa",
		service : "auth",
		url : "https://direct-qa.dnb.com/rest/Authentication"
	}, {
		env : "stg",
		service : "auth",
		url : "https://direct-stg.dnb.com/rest/Authentication"
	}, {
		env : "prod",
		service : "auth",
		url : "https://direct.dnb.com/rest/Authentication"
	}, {
		env : "qa",
		service : "pcs",
		url : "https://direct-qa.dnb.com/rest/ProductCatalogService/V2/ListAvailableProduct?DUNSNumber={placeholder}"
	}, {
		env : "stg",
		service : "pcs",
		url : "https://direct-stg.dnb.com/rest/ProductCatalogService/V2/ListAvailableProduct?DUNSNumber={placeholder}"
	}, {
		env : "prod",
		service : "pcs",
		url : "https://direct.dnb.com/rest/ProductCatalogService/V2/ListAvailableProduct?DUNSNumber={placeholder}"
	}, {
		env : "qa",
		service : "img_pkg_image_list",
		url : "https://direct-qa.dnb.com/V2.2/organizations/{placeholder}/publicdocuments?CountryISOAlpha2Code=GB"
	}, {
		env : "stg",
		service : "img_pkg_image_list",
		url : "https://direct-stg.dnb.com/V2.2/organizations/{placeholder}/publicdocuments?CountryISOAlpha2Code=GB"
	}, {
		env : "prod",
		service : "img_pkg_image_list",
		url : "https://direct.dnb.com/V2.2/organizations/{placeholder}/publicdocuments?CountryISOAlpha2Code=GB"
	}, {
		env : "qa",
		service : "img_pkg_image_list_filter",
		url : "https://direct-qa.dnb.com/V2.2/organizations/{placeholder}/publicdocuments?CountryISOAlpha2Code=GB&DocumentTypeCode=10248"
	}, {
		env : "stg",
		service : "img_pkg_image_list_filter",
		url : "https://direct-stg.dnb.com/V2.2/organizations/{placeholder}/publicdocuments?CountryISOAlpha2Code=GB&DocumentTypeCode=10248"
	}, {
		env : "prod",
		service : "img_pkg_image_list_filter",
		url : "https://direct.dnb.com/V2.2/organizations/{placeholder}/publicdocuments?CountryISOAlpha2Code=GB&DocumentTypeCode=10248"
	}, {
		env : "qa",
		service : "img_pkg_download",
		url : "https://direct-qa.dnb.com/V3.1/organizations/{placeholder}/products/publicdocument?CountryISOAlpha2Code=GB&DocumentPackageName=CRI&DocumentFilingHistoryRequiredIndicator=true&COVERPAGEDUNS=210279774&COVERPAGEORGANIZATIONNAME=Paul&CoverPageStreetAddressLine-1=15-17%20King%20Street%2C&CoverPageStreetAddressLine-2=London%2C&CoverPageStreetAddressLine-3=EC2V%208EA&CoverPageStreetAddressLine-4=GB&COVERPAGEUSERNAME=Mr%20Dan%20David&COVERPAGECUSTOMERREFERENCETEXT=12345"
	}, {
		env : "stg",
		service : "img_pkg_download",
		url : "https://direct-stg.dnb.com/V3.1/organizations/{placeholder}/products/publicdocument?CountryISOAlpha2Code=GB&DocumentPackageName=CRI&DocumentFilingHistoryRequiredIndicator=true&COVERPAGEDUNS=210279774&COVERPAGEORGANIZATIONNAME=Paul&CoverPageStreetAddressLine-1=15-17%20King%20Street%2C&CoverPageStreetAddressLine-2=London%2C&CoverPageStreetAddressLine-3=EC2V%208EA&CoverPageStreetAddressLine-4=GB&COVERPAGEUSERNAME=Mr%20Dan%20David&COVERPAGECUSTOMERREFERENCETEXT=12345"
	}, {
		env : "prod",
		service : "img_pkg_download",
		url : "https://direct.dnb.com/V3.1/organizations/{placeholder}/products/publicdocument?CountryISOAlpha2Code=GB&DocumentPackageName=CRI&DocumentFilingHistoryRequiredIndicator=true&COVERPAGEDUNS=210279774&COVERPAGEORGANIZATIONNAME=Paul&CoverPageStreetAddressLine-1=15-17%20King%20Street%2C&CoverPageStreetAddressLine-2=London%2C&CoverPageStreetAddressLine-3=EC2V%208EA&CoverPageStreetAddressLine-4=GB&COVERPAGEUSERNAME=Mr%20Dan%20David&COVERPAGECUSTOMERREFERENCETEXT=12345"
	}, {
		env : "qa",
		service : "pcs_public_docs",
		url : "https://direct-qa.dnb.com/rest/ProductCatalogService/V2/ListAvailablePublicDocuments?DUNSNumber={placeholder}"
	}, {
		env : "stg",
		service : "pcs_public_docs",
		url : "https://direct-stg.dnb.com/rest/ProductCatalogService/V2/ListAvailablePublicDocuments?DUNSNumber={placeholder}"
	}, {
		env : "prod",
		service : "pcs_public_docs",
		url : "https://direct.dnb.com/rest/ProductCatalogService/V2/ListAvailablePublicDocuments?DUNSNumber={placeholder}"
	}, {
		env : "qa",
		service : "pcs_public_docs_filter",
		url : "https://direct-qa.dnb.com/rest/ProductCatalogService/V2/ListAvailablePublicDocuments?DUNSNumber={placeholder}&DocumentTypeCode=10248"
	}, {
		env : "stg",
		service : "pcs_public_docs_filter",
		url : "https://direct-stg.dnb.com/rest/ProductCatalogService/V2/ListAvailablePublicDocuments?DUNSNumber={placeholder}&DocumentTypeCode=10248"
	}, {
		env : "prod",
		service : "pcs_public_docs_filter",
		url : "https://direct.dnb.com/rest/ProductCatalogService/V2/ListAvailablePublicDocuments?DUNSNumber={placeholder}&DocumentTypeCode=10248"
	}, {
		env : "qa",
		service : "order_company_doc",
		url : "https://direct-qa.dnb.com/rest/ReportProductService/V2/OrderCompanyPublicDocument?DUNSNumber=987027422&FilingDate=2015-05-01&FilingReferenceNumber=184269936&DocumentFormName=B10(R)"
	}, {
		env : "stg",
		service : "order_company_doc",
		url : "https://direct-stg.dnb.com/rest/ReportProductService/V2/OrderCompanyPublicDocument?DUNSNumber=987027422&FilingDate=2015-05-01&FilingReferenceNumber=184269936&DocumentFormName=B10(R)"
	}, {
		env : "prod",
		service : "order_company_doc",
		url : "https://direct.dnb.com/rest/ReportProductService/V2/OrderCompanyPublicDocument?DUNSNumber=987027422&FilingDate=2015-05-01&FilingReferenceNumber=184269936&DocumentFormName=B10(R)"
	}, {
		env : "qa",
		service : "linkage",
		url : "https://direct-qa.dnb.com/rest/LinkageService/V2/OrderProduct?DUNSNumber={placeholder}&CountryISOAlpha2Code=GB&DNBProductID=LNK_FF_MNRT"
	}, {
		env : "stg",
		service : "linkage",
		url : "https://direct-stg.dnb.com/rest/LinkageService/V2/OrderProduct?DUNSNumber={placeholder}&CountryISOAlpha2Code=GB&DNBProductID=LNK_FF_MNRT"
	}, {
		env : "prod",
		service : "linkage",
		url : "https://direct.dnb.com/rest/LinkageService/V2/OrderProduct?DUNSNumber={placeholder}&CountryISOAlpha2Code=GB&DNBProductID=LNK_FF_MNRT"
	}, {
		env : "qa",
		service : "comp_gbo",
		url : "https://direct-qa.dnb.com/V5.0/organizations/{placeholder}/products/GBO?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "comp_gbo",
		url : "https://direct-stg.dnb.com/V5.0/organizations/{placeholder}/products/GBO?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "comp_gbo",
		url : "https://direct.dnb.com/V5.0/organizations/{placeholder}/products/GBO?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "comp_so",
		url : "https://direct-qa.dnb.com/V5.0/organizations/{placeholder}/products/SMPL_OWNSHP?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "comp_so",
		url : "https://direct-stg.dnb.com/V5.0/organizations/{placeholder}/products/SMPL_OWNSHP?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "comp_so",
		url : "https://direct.dnb.com/V5.0/organizations/{placeholder}/products/SMPL_OWNSHP?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "comp_single_ownership",
		url : "https://direct-qa.dnb.com/V5.0/organizations/{placeholder}/products/OWNSHP_VRF?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "comp_single_ownership",
		url : "https://direct-stg.dnb.com/V5.0/organizations/{placeholder}/products/OWNSHP_VRF?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "comp_single_ownership",
		url : "https://direct.dnb.com/V5.0/organizations/{placeholder}/products/OWNSHP_VRF?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "comp_vrf_rpt",
		url : "https://direct-qa.dnb.com/V5.0/organizations/{placeholder}/products/CMP_VRF_RPT?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "comp_vrf_rpt",
		url : "https://direct-stg.dnb.com/V5.0/organizations/{placeholder}/products/CMP_VRF_RPT?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "comp_vrf_rpt",
		url : "https://direct.dnb.com/V5.0/organizations/{placeholder}/products/CMP_VRF_RPT?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "comp_vrf_id",
		url : "https://direct-qa.dnb.com/V5.0/organizations/{placeholder}/products/CMP_VRF_ID?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "comp_vrf_id",
		url : "https://direct-stg.dnb.com/V5.0/organizations/{placeholder}/products/CMP_VRF_ID?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "comp_vrf_id",
		url : "https://direct.dnb.com/V5.0/organizations/{placeholder}/products/CMP_VRF_ID?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "comp_kyc",
		url : "https://direct-qa.dnb.com/V5.0/organizations/{placeholder}/products/KYC?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "comp_kyc",
		url : "https://direct-stg.dnb.com/V5.0/organizations/{placeholder}/products/KYC?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "comp_kyc",
		url : "https://direct.dnb.com/V5.0/organizations/{placeholder}/products/KYC?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "dcp_prem",
		url : "https://direct-qa.dnb.com/V2/organizations/{placeholder}/products/DCP_PREM?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "dcp_prem",
		url : "https://direct-stg.dnb.com/V2.0/organizations/{placeholder}/products/DCP_PREM?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "dcp_prem",
		url : "https://direct.dnb.com/V2.0/organizations/{placeholder}/products/DCP_PREM?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "gbo",
		url : "https://direct-qa.dnb.com/V2/organizations/{placeholder}/products/GBO?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "gbo",
		url : "https://direct-stg.dnb.com/V2.0/organizations/{placeholder}/products/GBO?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "gbo",
		url : "https://direct.dnb.com/V2/organizations/{placeholder}/products/GBO?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "so",
		url : "https://direct-qa.dnb.com/V2/organizations/{placeholder}/products/SMPL_OWNSHP?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "so",
		url : "https://direct-stg.dnb.com/V2.0/organizations/{placeholder}/products/SMPL_OWNSHP?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "so",
		url : "https://direct.dnb.com/V2/organizations/{placeholder}/products/SMPL_OWNSHP?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "cmp_rpt",
		url : "https://direct-qa.dnb.com/V4.0/organizations/{placeholder}/products/CMP_VRF_RPT?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "cmp_rpt",
		url : "https://direct-stg.dnb.com/V4.0/organizations/{placeholder}/products/CMP_VRF_RPT?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "cmp_rpt",
		url : "https://direct.dnb.com/V4.0/organizations/{placeholder}/products/CMP_VRF_RPT?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "cmp_id",
		url : "https://direct-qa.dnb.com/V4.0/organizations/{placeholder}/products/CMP_VRF_ID?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "cmp_id",
		url : "https://direct-stg.dnb.com/V4.0/organizations/{placeholder}/products/CMP_VRF_ID?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "cmp_id",
		url : "https://direct.dnb.com/V4.0/organizations/{placeholder}/products/CMP_VRF_ID?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "cmp_bol",
		url : "https://direct-qa.dnb.com/V1.1/organizations/{placeholder}/products/CMP_BOL?ArchiveProductOptOutIndicator=true&TradeUpIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "cmp_bol",
		url : "https://direct-stg.dnb.com/V1.1/organizations/{placeholder}/products/CMP_BOL?ArchiveProductOptOutIndicator=true&TradeUpIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "cmp_bol",
		url : "https://direct.dnb.com/V1.1/organizations/{placeholder}/products/CMP_BOL?ArchiveProductOptOutIndicator=true&TradeUpIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "cmp_bos",
		url : "https://direct-qa.dnb.com/V1.1/organizations/{placeholder}/products/CMP_BOS?ArchiveProductOptOutIndicator=true&TradeUpIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "cmp_bos",
		url : "https://direct-stg.dnb.com/V1.1/organizations/{placeholder}/products/CMP_BOS?ArchiveProductOptOutIndicator=true&TradeUpIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "cmp_bos",
		url : "https://direct.dnb.com/V1.1/organizations/{placeholder}/products/CMP_BOS?ArchiveProductOptOutIndicator=true&TradeUpIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "kyc",
		url : "https://direct-qa.dnb.com/V2/organizations/{placeholder}/products/KYC?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "stg",
		service : "kyc",
		url : "https://direct-stg.dnb.com/V2.0/organizations/{placeholder}/products/KYC?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "prod",
		service : "kyc",
		url : "https://direct.dnb.com/V2/organizations/{placeholder}/products/KYC?ArchiveProductOptOutIndicator=true&orderReasonCode=6333"
	}, {
		env : "qa",
		service : "rdc_search",
		url : "https://direct-qa.dnb.com/V1.0/compliancecheck/entities/alerts?CandidateDisplayStartSequenceNumber=1&CandidatePerPageMaximumQuantity=100&CustomerBillingEndorsementText=dnb_test&SubjectTypeText=P&subjectname={placeholder}"
	}, {
		env : "stg",
		service : "rdc_search",
		url : "https://direct-stg.dnb.com/V1.0/compliancecheck/entities/alerts?CandidateDisplayStartSequenceNumber=1&CandidatePerPageMaximumQuantity=100&CustomerBillingEndorsementText=dnb_test&SubjectTypeText=P&subjectname={placeholder}"
	}, {
		env : "prod",
		service : "rdc_search",
		url : "https://direct.dnb.com/V1.0/compliancecheck/entities/alerts?CandidateDisplayStartSequenceNumber=1&CandidatePerPageMaximumQuantity=100&CustomerBillingEndorsementText=dnb_test&SubjectTypeText=P&subjectname={placeholder}"
	}, {
		env : "qa",
		service : "rdc_entity",
		url : "https://direct-qa.dnb.com/V1.0/compliancecheck/entities/EntitySystemID-1b59b76f0e75fee15d3f3d53eb346cc4/products/CMP_ENT_DTL?ProductFormatPreferenceCode=7004&httpClient.socketTimeout=30000&httpClient.connectTimeout=30000&CustomerBillingEndorsementText=dnb_test"
	}, {
		env : "stg",
		service : "rdc_entity",
		url : "https://direct-stg.dnb.com/V1.0/compliancecheck/entities/EntitySystemID-1b59b76f0e75fee15d3f3d53eb346cc4/products/CMP_ENT_DTL?ProductFormatPreferenceCode=7004&httpClient.socketTimeout=30000&httpClient.connectTimeout=30000&CustomerBillingEndorsementText=dnb_test"
	}, {
		env : "prod",
		service : "rdc_entity",
		url : "https://direct.dnb.com/V1.0/compliancecheck/entities/EntitySystemID-1b59b76f0e75fee15d3f3d53eb346cc4/products/CMP_ENT_DTL?ProductFormatPreferenceCode=7004&httpClient.socketTimeout=30000&httpClient.connectTimeout=30000&CustomerBillingEndorsementText=dnb_test"
	}, {
		env : "qa",
		service : "rdc_entity_pdf",
		url : "https://direct-qa.dnb.com/V1.0/compliancecheck/entities/EntitySystemID-1b59b76f0e75fee15d3f3d53eb346cc4/products/CMP_ENT_VW?ProductFormatPreferenceCode=13204&httpClient.socketTimeout=30000&httpClient.connectTimeout=30000&CustomerBillingEndorsementText=dnb_test"
	}, {
		env : "stg",
		service : "rdc_entity_pdf",
		url : "https://direct-stg.dnb.com/V1.0/compliancecheck/entities/EntitySystemID-1b59b76f0e75fee15d3f3d53eb346cc4/products/CMP_ENT_VW?ProductFormatPreferenceCode=13204&httpClient.socketTimeout=30000&httpClient.connectTimeout=30000&CustomerBillingEndorsementText=dnb_test"
	}, {
		env : "prod",
		service : "rdc_entity_pdf",
		url : "https://direct.dnb.com/V1.0/compliancecheck/entities/EntitySystemID-1b59b76f0e75fee15d3f3d53eb346cc4/products/CMP_ENT_VW?ProductFormatPreferenceCode=13204&httpClient.socketTimeout=30000&httpClient.connectTimeout=30000&CustomerBillingEndorsementText=dnb_test"
	}, {
		env : "qa",
		service : "rdc_alerts",
		url : "https://direct-qa.dnb.com/V1.0/compliancecheck/subjects/alerts"
	}, {
		env : "stg",
		service : "rdc_alerts",
		url : "https://direct-stg.dnb.com/V1.0/compliancecheck/subjects/alerts"
	}, {
		env : "prod",
		service : "rdc_alerts",
		url : "https://direct.dnb.com/V1.0/compliancecheck/subjects/alerts"
	}, {
		env : "qa",
		service : "rdc_alerts_batch",
		url : "https://direct-qa.dnb.com/V1.0/compliancecheck/subjects/alerts?SubjectID={placeholder}"
	}, {
		env : "stg",
		service : "rdc_alerts_batch",
		url : "https://direct-stg.dnb.com/V1.0/compliancecheck/subjects/alerts?SubjectID={placeholder}"
	}, {
		env : "prod",
		service : "rdc_alerts_batch",
		url : "https://direct.dnb.com/V1.0/compliancecheck/subjects/alerts?SubjectID={placeholder}"
	}, {
		env : "qa",
		service : "rdc_subject_alerts",
		url : "https://direct-qa.dnb.com/V1.0/compliancecheck/subjects/{placeholder}?ComplianceDataModuleID=ALERTS"
	}, {
		env : "stg",
		service : "rdc_subject_alerts",
		url : "https://direct-stg.dnb.com/V1.0/compliancecheck/subjects/{placeholder}?ComplianceDataModuleID=ALERTS"
	}, {
		env : "prod",
		service : "rdc_subject_alerts",
		url : "https://direct.dnb.com/V1.0/compliancecheck/subjects/{placeholder}?ComplianceDataModuleID=ALERTS"
	}, {
		env : "qa",
		service : "rdc_register",
		url : "https://direct-qa.dnb.com/V1.0/compliancecheck/subjects"
	}, {
		env : "stg",
		service : "rdc_register",
		url : "https://direct-stg.dnb.com/V1.0/compliancecheck/subjects"
	}, {
		env : "prod",
		service : "rdc_register",
		url : "https://direct.dnb.com/V1.0/compliancecheck/subjects"
	}, {
		env : "qa",
		service : "match",
		url : "https://direct-qa.dnb.com/rest/CompanyService/V2/Match?CountryISOAlpha2Code=GB&DUNSNumber={placeholder}"
	}, {
		env : "stg",
		service : "match",
		url : "https://direct-stg.dnb.com/rest/CompanyService/V2/Match?CountryISOAlpha2Code=GB&DUNSNumber={placeholder}"
	}, {
		env : "prod",
		service : "match",
		url : "https://direct.dnb.com/rest/CompanyService/V2/Match?CountryISOAlpha2Code=GB&DUNSNumber={placeholder}"
	}, {
		env : "qa",
		service : "global",
		url : "https://direct-qa.dnb.com/V4.0/organizations?ExactLocationFindIndicator=true&InclusionDataDescription-1=IncludeUndeliverableAddressSubject&InclusionDataDescription-2=IncludeIncompleteData&InclusionDataDescription-3=IncludeOutofBusiness&SearchModeDescription=Basic&candidateMaximumQuantity=250&candidatePerPageMaximumQuantity=250&findcompany=true&httpClient.connectTimeout=10000&httpClient.socketTimeout=10000&keywordText={placeholder}"
	}, {
		env : "stg",
		service : "global",
		url : "https://direct-stg.dnb.com/V4.0/organizations?ExactLocationFindIndicator=true&InclusionDataDescription-1=IncludeUndeliverableAddressSubject&InclusionDataDescription-2=IncludeIncompleteData&InclusionDataDescription-3=IncludeOutofBusiness&SearchModeDescription=Basic&candidateMaximumQuantity=250&candidatePerPageMaximumQuantity=250&findcompany=true&httpClient.connectTimeout=10000&httpClient.socketTimeout=10000&keywordText={placeholder}"
	}, {
		env : "prod",
		service : "global",
		url : "https://direct.dnb.com/V4.0/organizations?ExactLocationFindIndicator=true&InclusionDataDescription-1=IncludeUndeliverableAddressSubject&InclusionDataDescription-2=IncludeIncompleteData&InclusionDataDescription-3=IncludeOutofBusiness&SearchModeDescription=Basic&candidateMaximumQuantity=250&candidatePerPageMaximumQuantity=250&findcompany=true&httpClient.connectTimeout=10000&httpClient.socketTimeout=10000&keywordText={placeholder}"
	}, {
		env : "qa",
		service : "list_portfolio",
		url : "https://direct-qa.dnb.com/rest/PortfolioService/V2/ListPortfolioAsset"
	}, {
		env : "stg",
		service : "list_portfolio",
		url : "https://direct-stg.dnb.com/rest/PortfolioService/V2/ListPortfolioAsset"
	}, {
		env : "prod",
		service : "list_portfolio",
		url : "https://direct.dnb.com/rest/PortfolioService/V2/ListPortfolioAsset"
	}, {
		env : "qa",
		service : "archive_portfolio_asset",
		url : "https://direct-qa.dnb.com/rest/PortfolioService/V2/ArchivePortfolioAsset"
	}, {
		env : "stg",
		service : "archive_portfolio_asset",
		url : "https://direct-stg.dnb.com/rest/PortfolioService/V2/ArchivePortfolioAsset"
	}, {
		env : "prod",
		service : "archive_portfolio_asset",
		url : "https://direct.dnb.com/rest/PortfolioService/V2/ArchivePortfolioAsset"
	}, {
		env : "qa",
		service : "ch_director_search",
		url : "https://direct-qa.dnb.com/v1.0/companyhouse/officers?officerType=CUR&officerLastName={placeholder}"
	}, {
		env : "stg",
		service : "ch_director_search",
		url : "https://direct-stg.dnb.com/v1.0/companyhouse/officers?officerType=CUR&officerLastName={placeholder}"
	}, {
		env : "prod",
		service : "ch_director_search",
		url : "https://direct.dnb.com/v1.0/companyhouse/officers?officerType=CUR&officerLastName={placeholder}"
	}, {
		env : "qa",
		service : "ch_director_order",
		url : "https://direct-qa.dnb.com/v1.0/companyhouse/officers/{placeholder}"
	}, {
		env : "stg",
		service : "ch_director_order",
		url : "https://direct-stg.dnb.com/v1.0/companyhouse/officers/{placeholder}"
	}, {
		env : "prod",
		service : "ch_director_order",
		url : "https://direct.dnb.com/v1.0/companyhouse/officers/{placeholder}"
	}, {
		env : "qa",
		service : "ch_director_search_v3",
		url : "https://direct-qa.dnb.com/v3.0/companyhouse/officers?officerFullName={placeholder}"
	}, {
		env : "stg",
		service : "ch_director_search_v3",
		url : "https://direct-stg.dnb.com/v3.0/companyhouse/officers?officerFullName={placeholder}"
	}, {
		env : "prod",
		service : "ch_director_search_v3",
		url : "https://direct.dnb.com/v3.0/companyhouse/officers?officerFullName={placeholder}"
	}, {
		env : "qa",
		service : "ch_director_order_v3",
		url : "https://direct-qa.dnb.com/v3.0/companyhouse/officers/{placeholder}"
	}, {
		env : "stg",
		service : "ch_director_order_v3",
		url : "https://direct-stg.dnb.com/v3.0/companyhouse/officers/{placeholder}"
	}, {
		env : "prod",
		service : "ch_director_order_v3",
		url : "https://direct.dnb.com/v3.0/companyhouse/officers/{placeholder}"
	}, {
		env : "qa",
		service : "ch_filing_history",
		url : "https://direct-qa.dnb.com/v2.0/companyhouse/filinghistory?organizationIdentificationNumber={placeholder}&CapitalDocumentRequiredIndicator=true"
	}, {
		env : "stg",
		service : "ch_filing_history",
		url : "https://direct-stg.dnb.com/v2.0/companyhouse/filinghistory?organizationIdentificationNumber={placeholder}&CapitalDocumentRequiredIndicator=true"
	}, {
		env : "prod",
		service : "ch_filing_history",
		url : "https://direct.dnb.com/v2.0/companyhouse/filinghistory?organizationIdentificationNumber={placeholder}&CapitalDocumentRequiredIndicator=true"
	}, {
		env : "qa",
		service : "investigation",
		url : "https://direct-qa.dnb.com/rest/InvestigationService/V2/PlaceInvestigation"
	}, {
		env : "stg",
		service : "investigation",
		url : "https://direct-stg.dnb.com/rest/InvestigationService/V2/PlaceInvestigation"
	}, {
		env : "prod",
		service : "investigation",
		url : "https://direct.dnb.com/rest/InvestigationService/V2/PlaceInvestigation"
	}, {
		env : "qa",
		service : "patriot_act",
		url : "https://direct-qa.dnb.com/v4.0/sanctionswatchlistscreening/subjects/{placeholder}/SANCT_GOVT_WLST_SCRN"
	}, {
		env : "stg",
		service : "patriot_act",
		url : "https://direct-stg.dnb.com/v4.0/sanctionswatchlistscreening/subjects/{placeholder}/SANCT_GOVT_WLST_SCRN"
	}, {
		env : "prod",
		service : "patriot_act",
		url : "https://direct.dnb.com/v4.0/sanctionswatchlistscreening/subjects/{placeholder}/SANCT_GOVT_WLST_SCRN"
	}, {
		env : "qa",
		service : "gms_reg",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/registrations?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "stg",
		service : "gms_reg",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/registrations?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "prod",
		service : "gms_reg",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/registrations?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "qa",
		service : "gms_profile_create",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/monitoringprofiles?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "stg",
		service : "gms_profile_create",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/monitoringprofiles?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "prod",
		service : "gms_profile_create",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/monitoringprofiles?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "qa",
		service : "gms_profile_param",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/monitoringprofiles/{placeholder}?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "stg",
		service : "gms_profile_param",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/monitoringprofiles/{placeholder}?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "prod",
		service : "gms_profile_param",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/monitoringprofiles/{placeholder}?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "qa",
		service : "gms_notice_list",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/changenotices?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "stg",
		service : "gms_notice_list",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/changenotices?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "prod",
		service : "gms_notice_list",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/changenotices?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "qa",
		service : "gms_notice_list_count",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/changenotices?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41&GetCountOnlyIndicator=1"
	}, {
		env : "stg",
		service : "gms_notice_list_count",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/changenotices?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41&GetCountOnlyIndicator=1"
	}, {
		env : "prod",
		service : "gms_notice_list_count",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/changenotices?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41&GetCountOnlyIndicator=1"
	}, {
		env : "qa",
		service : "gms_notice_param",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/changenotices/{placeholder}?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "stg",
		service : "gms_notice_param",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/changenotices/{placeholder}?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "prod",
		service : "gms_notice_param",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/changenotices/{placeholder}?ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "qa",
		service : "gms_subject",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/monitoringsubjects/{placeholder}?DNBProductID=GSRL7&ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "stg",
		service : "gms_subject",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/monitoringsubjects/{placeholder}?DNBProductID=GSRL7&ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "prod",
		service : "gms_subject",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/monitoringsubjects/{placeholder}?DNBProductID=GSRL7&ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "qa",
		service : "gms_events",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/changeevents/{placeholder}?DUNSNumber=200000024&DNBProductID=GSRL7&ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=965088422&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "stg",
		service : "gms_events",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/changeevents/{placeholder}?DUNSNumber=200000024&DNBProductID=GSRL7&ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970041271&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "prod",
		service : "gms_events",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/changeevents/{placeholder}?DUNSNumber=200000024&DNBProductID=GSRL7&ApplicationTransactionID=onboard-1&TransactionTimestamp=2001-09-11T09:30:47-05:00&ApplicationID=36&UserID=teamjoly@dnb.com&CustomerID=970151058&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=41"
	}, {
		env : "qa",
		service : "gms_alert_report",
		url : "https://direct-qa.dnb.com/V2.0/gmsmonitoring/alertreport?UserID=teamjoly@dnb.com&CustomerID=965088422&DUNSNumber={placeholder}&CountryISOAlpha2Code=GB&ChangeEventID=355746&ApplicationTransactionID=onboard-1&ApplicationID=36&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=39&SeverityText=Down%20Trend&ChangeEventTypeCode=17893"
	}, {
		env : "stg",
		service : "gms_alert_report",
		url : "https://direct-stg.dnb.com/V2.0/gmsmonitoring/alertreport?UserID=teamjoly@dnb.com&CustomerID=970041271&DUNSNumber={placeholder}&CountryISOAlpha2Code=GB&ChangeEventID=355746&ApplicationTransactionID=onboard-1&ApplicationID=36&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=39&SeverityText=Down%20Trend&ChangeEventTypeCode=17893"
	}, {
		env : "prod",
		service : "gms_alert_report",
		url : "https://direct.dnb.com/V2.0/gmsmonitoring/alertreport?UserID=teamjoly@dnb.com&CustomerID=970151058&DUNSNumber={placeholder}&CountryISOAlpha2Code=GB&ChangeEventID=355746&ApplicationTransactionID=onboard-1&ApplicationID=36&UserCountryISOAlpha2Code=GB&LanguagePreferenceCode=39&SeverityText=Down%20Trend&ChangeEventTypeCode=17893"
	}, {
		env : "qa",
		service : "portfolio_assets",
		url : "https://direct-qa.dnb.com/V2/assets?OrderTransactionTypeCode=0&CandidateMaximumQuantity=10&SortBasisText=PortfolioAssetID&SortDirectionText=Ascending&CandidateDisplayStartSequenceNumber=1&ApplicationTransactionID=f9fc47c5-6733-4325-bbbe-157deb0520ba&DNBProductID=ComplianceReport"
	}, {
		env : "stg",
		service : "portfolio_assets",
		url : "https://direct-stg.dnb.com/V2/assets?OrderTransactionTypeCode=0&CandidateMaximumQuantity=10&SortBasisText=PortfolioAssetID&SortDirectionText=Ascending&CandidateDisplayStartSequenceNumber=1&ApplicationTransactionID=f9fc47c5-6733-4325-bbbe-157deb0520ba&DNBProductID=ComplianceReport"
	}, {
		env : "prod",
		service : "portfolio_assets",
		url : "https://direct.dnb.com/V2/assets?OrderTransactionTypeCode=0&CandidateMaximumQuantity=10&SortBasisText=PortfolioAssetID&SortDirectionText=Ascending&CandidateDisplayStartSequenceNumber=1&ApplicationTransactionID=f9fc47c5-6733-4325-bbbe-157deb0520ba&DNBProductID=ComplianceReport"
	}, {
		env : "qa",
		service : "sandbox_match",
		url : "https://direct-qa.dnb.com/V5.0/organizations?CountryISOAlpha2Code=US&SubjectName=GORMAN%20MANUFACTURING&match=true&MatchTypeText=Advanced&TerritoryName=CA"
	}, {
		env : "stg",
		service : "sandbox_match",
		url : "https://direct-stg.dnb.com/V5.0/organizations?CountryISOAlpha2Code=US&SubjectName=GORMAN%20MANUFACTURING&match=true&MatchTypeText=Advanced&TerritoryName=CA"
	}, {
		env : "prod",
		service : "sandbox_match",
		url : "https://direct.dnb.com/V5.0/organizations?CountryISOAlpha2Code=US&SubjectName=GORMAN%20MANUFACTURING&match=true&MatchTypeText=Advanced&TerritoryName=CA"
	}, {
		env : "qa",
		service : "sandbox_dcp",
		url : "https://direct-qa.dnb.com/V6.0/organizations/804735132/products/DCP_STD"
	}, {
		env : "stg",
		service : "sandbox_dcp",
		url : "https://direct-stg.dnb.com/V6.0/organizations/804735132/products/DCP_STD"
	}, {
		env : "prod",
		service : "sandbox_dcp",
		url : "https://direct.dnb.com/V6.0/organizations/804735132/products/DCP_STD"
	}, {
		env : "",
		service : "date_test",
		url : "http://date.jsontest.com/"
	}, {
		env : "",
		service : "open_company",
		url : "https://api.opencorporates.com/v0.3/companies/search?q={placeholder}&current_status=Active&order=score"
	}, {
		env : "",
		service : "open_officer",
		url : "https://api.opencorporates.com/v0.3/officers/search?q={placeholder}&order=score"
	}, {
		env : "",
		service : "open_lei",
		url : "http://openleis.com/legal_entities/{placeholder}.json"
	} ],

	//Use this DUNS# if no specific parameter is provided.
	placeholder : "222228632"
});


/**
 * The default advanced settings to use.
 */
angular.module('clientApp').value('advancedSettings', {
	requestUrl : "",
	requestMethod : "get",
	autoAuthenticate : true,
	payload : ""
});


/**
 * The credentials used for authentication. If available, these are populated from Chrome Storage.
 * If necessary, there is also an option to hard-code them here.
 */
angular.module('clientApp').value('credentials', {});
