// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: projectsuit/unit/v1/unit_command_v1.proto

package unitv1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	UnitCommandService_CreateUnit_FullMethodName = "/projectsuit.unit.v1.UnitCommandService/CreateUnit"
	UnitCommandService_UpdateUnit_FullMethodName = "/projectsuit.unit.v1.UnitCommandService/UpdateUnit"
	UnitCommandService_DeleteUnit_FullMethodName = "/projectsuit.unit.v1.UnitCommandService/DeleteUnit"
)

// UnitCommandServiceClient is the client API for UnitCommandService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UnitCommandServiceClient interface {
	CreateUnit(ctx context.Context, in *CreateUnitRequest, opts ...grpc.CallOption) (*CreateUnitResponse, error)
	UpdateUnit(ctx context.Context, in *UpdateUnitRequest, opts ...grpc.CallOption) (*UpdateUnitResponse, error)
	DeleteUnit(ctx context.Context, in *DeleteUnitRequest, opts ...grpc.CallOption) (*DeleteUnitResponse, error)
}

type unitCommandServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUnitCommandServiceClient(cc grpc.ClientConnInterface) UnitCommandServiceClient {
	return &unitCommandServiceClient{cc}
}

func (c *unitCommandServiceClient) CreateUnit(ctx context.Context, in *CreateUnitRequest, opts ...grpc.CallOption) (*CreateUnitResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(CreateUnitResponse)
	err := c.cc.Invoke(ctx, UnitCommandService_CreateUnit_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *unitCommandServiceClient) UpdateUnit(ctx context.Context, in *UpdateUnitRequest, opts ...grpc.CallOption) (*UpdateUnitResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UpdateUnitResponse)
	err := c.cc.Invoke(ctx, UnitCommandService_UpdateUnit_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *unitCommandServiceClient) DeleteUnit(ctx context.Context, in *DeleteUnitRequest, opts ...grpc.CallOption) (*DeleteUnitResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(DeleteUnitResponse)
	err := c.cc.Invoke(ctx, UnitCommandService_DeleteUnit_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UnitCommandServiceServer is the server API for UnitCommandService service.
// All implementations must embed UnimplementedUnitCommandServiceServer
// for forward compatibility.
type UnitCommandServiceServer interface {
	CreateUnit(context.Context, *CreateUnitRequest) (*CreateUnitResponse, error)
	UpdateUnit(context.Context, *UpdateUnitRequest) (*UpdateUnitResponse, error)
	DeleteUnit(context.Context, *DeleteUnitRequest) (*DeleteUnitResponse, error)
	mustEmbedUnimplementedUnitCommandServiceServer()
}

// UnimplementedUnitCommandServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedUnitCommandServiceServer struct{}

func (UnimplementedUnitCommandServiceServer) CreateUnit(context.Context, *CreateUnitRequest) (*CreateUnitResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUnit not implemented")
}
func (UnimplementedUnitCommandServiceServer) UpdateUnit(context.Context, *UpdateUnitRequest) (*UpdateUnitResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUnit not implemented")
}
func (UnimplementedUnitCommandServiceServer) DeleteUnit(context.Context, *DeleteUnitRequest) (*DeleteUnitResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUnit not implemented")
}
func (UnimplementedUnitCommandServiceServer) mustEmbedUnimplementedUnitCommandServiceServer() {}
func (UnimplementedUnitCommandServiceServer) testEmbeddedByValue()                            {}

// UnsafeUnitCommandServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UnitCommandServiceServer will
// result in compilation errors.
type UnsafeUnitCommandServiceServer interface {
	mustEmbedUnimplementedUnitCommandServiceServer()
}

func RegisterUnitCommandServiceServer(s grpc.ServiceRegistrar, srv UnitCommandServiceServer) {
	// If the following call pancis, it indicates UnimplementedUnitCommandServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&UnitCommandService_ServiceDesc, srv)
}

func _UnitCommandService_CreateUnit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateUnitRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UnitCommandServiceServer).CreateUnit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: UnitCommandService_CreateUnit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UnitCommandServiceServer).CreateUnit(ctx, req.(*CreateUnitRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UnitCommandService_UpdateUnit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateUnitRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UnitCommandServiceServer).UpdateUnit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: UnitCommandService_UpdateUnit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UnitCommandServiceServer).UpdateUnit(ctx, req.(*UpdateUnitRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UnitCommandService_DeleteUnit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUnitRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UnitCommandServiceServer).DeleteUnit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: UnitCommandService_DeleteUnit_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UnitCommandServiceServer).DeleteUnit(ctx, req.(*DeleteUnitRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// UnitCommandService_ServiceDesc is the grpc.ServiceDesc for UnitCommandService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UnitCommandService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "projectsuit.unit.v1.UnitCommandService",
	HandlerType: (*UnitCommandServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateUnit",
			Handler:    _UnitCommandService_CreateUnit_Handler,
		},
		{
			MethodName: "UpdateUnit",
			Handler:    _UnitCommandService_UpdateUnit_Handler,
		},
		{
			MethodName: "DeleteUnit",
			Handler:    _UnitCommandService_DeleteUnit_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "projectsuit/unit/v1/unit_command_v1.proto",
}
