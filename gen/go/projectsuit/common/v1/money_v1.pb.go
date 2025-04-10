// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: projectsuit/common/v1/money_v1.proto

package commonv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Money struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Currency      string                 `protobuf:"bytes,1,opt,name=currency,proto3" json:"currency,omitempty"`
	Amount        float64                `protobuf:"fixed64,2,opt,name=amount,proto3" json:"amount,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Money) Reset() {
	*x = Money{}
	mi := &file_projectsuit_common_v1_money_v1_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Money) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Money) ProtoMessage() {}

func (x *Money) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_common_v1_money_v1_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Money.ProtoReflect.Descriptor instead.
func (*Money) Descriptor() ([]byte, []int) {
	return file_projectsuit_common_v1_money_v1_proto_rawDescGZIP(), []int{0}
}

func (x *Money) GetCurrency() string {
	if x != nil {
		return x.Currency
	}
	return ""
}

func (x *Money) GetAmount() float64 {
	if x != nil {
		return x.Amount
	}
	return 0
}

var File_projectsuit_common_v1_money_v1_proto protoreflect.FileDescriptor

const file_projectsuit_common_v1_money_v1_proto_rawDesc = "" +
	"\n" +
	"$projectsuit/common/v1/money_v1.proto\x12\x15projectsuit.common.v1\";\n" +
	"\x05Money\x12\x1a\n" +
	"\bcurrency\x18\x01 \x01(\tR\bcurrency\x12\x16\n" +
	"\x06amount\x18\x02 \x01(\x01R\x06amountB\xe8\x01\n" +
	"\x19com.projectsuit.common.v1B\fMoneyV1ProtoP\x01ZGgithub.com/orjinfinity/suit-proto/gen/go/projectsuit/common/v1;commonv1\xa2\x02\x03PCX\xaa\x02\x15Projectsuit.Common.V1\xca\x02\x15Projectsuit\\Common\\V1\xe2\x02!Projectsuit\\Common\\V1\\GPBMetadata\xea\x02\x17Projectsuit::Common::V1b\x06proto3"

var (
	file_projectsuit_common_v1_money_v1_proto_rawDescOnce sync.Once
	file_projectsuit_common_v1_money_v1_proto_rawDescData []byte
)

func file_projectsuit_common_v1_money_v1_proto_rawDescGZIP() []byte {
	file_projectsuit_common_v1_money_v1_proto_rawDescOnce.Do(func() {
		file_projectsuit_common_v1_money_v1_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_projectsuit_common_v1_money_v1_proto_rawDesc), len(file_projectsuit_common_v1_money_v1_proto_rawDesc)))
	})
	return file_projectsuit_common_v1_money_v1_proto_rawDescData
}

var file_projectsuit_common_v1_money_v1_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_projectsuit_common_v1_money_v1_proto_goTypes = []any{
	(*Money)(nil), // 0: projectsuit.common.v1.Money
}
var file_projectsuit_common_v1_money_v1_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_projectsuit_common_v1_money_v1_proto_init() }
func file_projectsuit_common_v1_money_v1_proto_init() {
	if File_projectsuit_common_v1_money_v1_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_projectsuit_common_v1_money_v1_proto_rawDesc), len(file_projectsuit_common_v1_money_v1_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_projectsuit_common_v1_money_v1_proto_goTypes,
		DependencyIndexes: file_projectsuit_common_v1_money_v1_proto_depIdxs,
		MessageInfos:      file_projectsuit_common_v1_money_v1_proto_msgTypes,
	}.Build()
	File_projectsuit_common_v1_money_v1_proto = out.File
	file_projectsuit_common_v1_money_v1_proto_goTypes = nil
	file_projectsuit_common_v1_money_v1_proto_depIdxs = nil
}
